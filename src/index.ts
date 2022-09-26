import * as dotenv from 'dotenv';
dotenv.config();
import fs from 'fs';
import { getAPIHierarchy } from './SNClient';
import { generateFiles } from './TSGenerator';
import { SNC } from './common';
const release = 'tokyo';
const NO_NAMESPACE = 'No namespace qualifier';
const configurations: SNC.HierarchyOpts[] = [
  { release, api: 'server', type: 'scoped' },
  { release, api: 'client', type: 'all' },
  { release, api: "server_legacy", type: "global" }
];
async function main() {
  const pathCheck = `./generated/${release}/docs/scoped`;
  if (!fs.existsSync(pathCheck)) fs.mkdirSync(pathCheck, { recursive: true });

  let hierarchyList: any = [];
  for (let conf of configurations) {
    console.log(`Loading ${conf.api}...`);
    let hierarchy = await getAPIHierarchy(conf);
    hierarchyList.push({ conf, hierarchy });
  }

  // give global scope some of the scoped classes
  let scopedHierarchy = hierarchyList.find((h: any) => h.conf.api === 'server').hierarchy;
  let globalHierarchy = hierarchyList.find((h: any) => h.conf.api === 'server_legacy').hierarchy;

  // some workarounds for static stuff
  scopedHierarchy[NO_NAMESPACE].classes = scopedHierarchy[NO_NAMESPACE].classes.map((c: SNC.SNClass) => {
    if (c.name === "action") c.name = "ui_action";
    return c;
  });

  let nnAvailableForGlobal = scopedHierarchy[NO_NAMESPACE].classes.filter((c: SNC.SNClass) => {
    return globalHierarchy[NO_NAMESPACE].classes.find((gc: any) => gc.name === c.name) === undefined;
  });
  globalHierarchy[NO_NAMESPACE].classes = globalHierarchy[NO_NAMESPACE].classes.concat(nnAvailableForGlobal);
  Object.keys(scopedHierarchy).forEach((ns: string) => {
    if (ns === NO_NAMESPACE) return;
    globalHierarchy[ns] = scopedHierarchy[ns];
  });

  for (let h of hierarchyList) {
    const conf = h.conf;
    const hierarchy = h.hierarchy;
    console.log(`Generating files for ${conf.api}...`);
    generateFiles({ ...conf, hierarchy });
  }
}
main();