import ts from 'typescript';
import path from 'path';
import { promises as fs, default as fss } from 'fs';
import { comment } from './CommentGenerator';
import prettier from 'prettier';
import { SNC, TSG, Mod } from './common';
export const NO_NAMESPACE = 'No namespace qualifier';
const _ = undefined;
const printer = ts.createPrinter();
let OUTPUT_DIR = '../generated';

export async function generateFiles(opts: TSG.Base) {
  let { hierarchy } = opts;
  if (OUTPUT_DIR.indexOf(`/${opts.release}`) < 0) {
    OUTPUT_DIR += `/${opts.release}`;
  }
  let moduleMap = getModuleMap(hierarchy);
  let statementList: ts.Statement[] = [];
  const hkeys = Object.keys(hierarchy);
  for (let namespaceName of hkeys) {
    let namespace = hierarchy[namespaceName];
    let result = await processNamespace({ ...opts, namespaceName, namespace, moduleMap }, opts.api);
    statementList = statementList.concat(result);
  }
  let apiName = opts.api;
  if (apiName === "server_legacy") apiName = "global";
  let sourceFilename = `${apiName}.d.ts`;
  let sourceFile = ts.createSourceFile(
    sourceFilename,
    '',
    ts.ScriptTarget.Latest,
    false,
    ts.ScriptKind.TS
  );
  sourceFile.statements = ts.createNodeArray(statementList);

  let filePath = path.join(getBasePath(), sourceFilename);
  let parentDir = path.dirname(filePath);
  ensurePathExists(parentDir);
  await writePrettyFile(filePath, printer.printFile(sourceFile));
}

function getModuleMap(hierarchy: SNC.SNApiHierarchy) {
  let moduleMap = new Map<string, string>();
  for (let namespaceName in hierarchy) {
    let namespace = hierarchy[namespaceName];
    let nsName = namespaceName === NO_NAMESPACE ? '' : namespaceName;
    for (let _class of namespace.classes) {
      moduleMap.set(_class.name, nsName);
    }
  }
  return moduleMap;
}

async function processNamespace(opts: TSG.ProcessNSOpts, api: string) {
  let { namespaceName, namespace } = opts;
  let classDescList = [];
  for (let _class of namespace.classes) {
    if (namespaceName !== NO_NAMESPACE) opts.hasNamespace = true;
    else opts.hasNamespace = false;
    
    let classDec = await generateAPIClass({ ...opts, _class });
    classDescList.push(classDec);
  }

  if (namespaceName !== NO_NAMESPACE) {
    const moduleBlock = ts.createModuleBlock(classDescList);
    const mods = [ts.createModifier(ts.SyntaxKind.DeclareKeyword)];
    return ts.createModuleDeclaration(_, mods, ts.createIdentifier(namespaceName), moduleBlock, ts.NodeFlags.Namespace);
  }
  return classDescList;
}

async function generateAPIClass(opts: TSG.ProcessClassOpts) {
  const declareKW = ts.createModifier(ts.SyntaxKind.DeclareKeyword);
  const exportKW = ts.createModifier(ts.SyntaxKind.ExportKeyword);
  let kwList = [];
  if (opts.hasNamespace) kwList.push(exportKW);
  else kwList.push(declareKW);

  let classMembers = generateClassMembers(opts);
  let prefixedClassName = opts._class.name;
  let classDec = ts.createClassDeclaration(
    _,
    kwList,
    prefixedClassName,
    _,
    _,
    classMembers
  );
  return classDec;
}

function getBasePath() {
  return path.resolve(__dirname, OUTPUT_DIR);
}

function ensurePathExists(ensurePath: string) {
  if (!fss.existsSync(ensurePath)) {
    fss.mkdirSync(ensurePath, { recursive: true });
  }
}

async function writePrettyFile(pth: string, text: string) {
  let config: prettier.Options = {
    filepath: pth
  };
  let prettierConfig = await prettier.resolveConfig(process.cwd());
  if (prettierConfig) {
    config = Object.assign(config, prettierConfig);
  }
  try {
    // https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html
    let content = `/// <reference no-default-lib="true"/>\n\n`;
    content += prettier.format(text, config);
    await fs.writeFile(pth, content);
  } catch(err) {
    let error = err as Error;
    console.log("swallowed error | " + config.filepath, error.message);
  }
}

function generateClassMembers(opts: TSG.ProcessClassOpts): ts.ClassElement[] {
  let { _class } = opts;
  let methods = generateMethods(_class.methods, _class);
  let properties = generateProperties(_class.properties) as ts.ClassElement[];
  return properties.concat(methods);
}

function generateMethods(methods: SNC.SNMethodMap, _class: SNC.SNClass) {
  let tsMethods: ts.ClassElement[] = [];
  for (let methodName in methods) {
    let method = methods[methodName];
    for (let inst of method.instances) {
      let methodId = ts.createIdentifier(methodName);
      let parameters = generateParameters(inst.params, _class);
      if (methodName !== 'constructor') {
        let returnType = inst.returns
          ? generateType(inst.returns, _class)
          : ts.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword);
        let genMethod = ts.createMethod(
          _,
          _,
          _,
          methodId,
          _,
          _,
          parameters,
          returnType,
          _
        );
        ts.addSyntheticLeadingComment(
          genMethod,
          ts.SyntaxKind.MultiLineCommentTrivia,
          generateMethodComment(method, inst),
          true
        );
        tsMethods.push(genMethod);
      } else {
        let _constructor = ts.createConstructor(_, _, parameters, _);
        tsMethods.push(_constructor);
      }
    }
  }
  return tsMethods;
}

function generateMethodComment(
  method: SNC.SNClassMethod,
  instance: SNC.SNMethodInstance
) {
  let c = comment();
  c.description(method.description);
  for (let p of instance.params) {
    c.param(p.name, p.description);
  }
  return c.render();
}

function generateProperties(properties: SNC.Property[]) {
  return properties.map(prop => {
    return ts.createProperty(_, _, prop.name, _, generateType(prop.type), _);
  });
}

function generateParameters(params: SNC.SNMethodParam[], _class: SNC.SNClass) {
  //figure out last non-optional param
  let lastNonOptional = findLastNonOptionalParam(params);
  return params.map((param, index) => {
    let paramType = generateType(param.type, _class);
    let paramName = param.name;
    if (paramName.indexOf("<object>") >= 0) paramName = "paramObj";
    if (param.optional && index < lastNonOptional) {
      paramType = ts.createUnionTypeNode([
        generateType(param.type),
        generateType('undefined')
      ]);
      return ts.createParameter(_, _, _, paramName, _, paramType, _);
    } else if (param.optional && index > lastNonOptional) {
      let questionMarkToken = ts.createToken(ts.SyntaxKind.QuestionToken);
      return ts.createParameter(
        _,
        _,
        _,
        paramName,
        questionMarkToken,
        paramType,
        _
      );
    } else {
      return ts.createParameter(_, _, _, paramName, _, paramType, _);
    }
  });
}

function findLastNonOptionalParam(params: SNC.SNMethodParam[]) {
  let last = -1;
  for (let i = 0; i < params.length; i++) {
    if (!params[i].optional) {
      last = i;
    }
  }
  return last;
}

function generateType(typeName: string, _class?: SNC.SNClass): ts.TypeNode {
  let types = ts.SyntaxKind;
  let basicTypes = new Map<string, ts.TypeNode>();
  basicTypes
    .set('string', ts.createKeywordTypeNode(types.StringKeyword))
    .set('number', ts.createKeywordTypeNode(types.NumberKeyword))
    .set('any', ts.createKeywordTypeNode(types.AnyKeyword))
    .set(
      'any[]',
      ts.createArrayTypeNode(ts.createKeywordTypeNode(types.AnyKeyword))
    )
    .set('boolean', ts.createKeywordTypeNode(types.BooleanKeyword))
    .set('undefined', ts.createKeywordTypeNode(types.UndefinedKeyword));
  if (basicTypes.has(typeName)) {
    return basicTypes.get(typeName) as ts.TypeNode;
  } else {
    // not using this right now, but we might need it later (circular dependencies)
    // if (typeName === _class.name) {
    //   return ts.createKeywordTypeNode(types.ThisKeyword);
    // }
    if (typeName.indexOf("Glide") === 0) {
      return ts.createTypeReferenceNode(typeName, _);
    }
    return ts.createKeywordTypeNode(types.AnyKeyword);
  }
}
