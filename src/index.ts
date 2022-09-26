import * as dotenv from 'dotenv';
dotenv.config();
import fs from 'fs';
import { getAPIHierarchy } from './SNClient';
import { generateFiles } from './TSGenerator';
import { SNC } from './common';
const release = 'tokyo';
const configurations: SNC.HierarchyOpts[] = [
  { release, api: 'server', type: 'scoped' },
  { release, api: 'client', type: 'all' },
  { release, api: "server_legacy", type: "global" }
];
main();
async function main() {
  for (let conf of configurations) {
    const pathCheck = `./generated/${release}/docs/server`;
    if (!fs.existsSync(pathCheck)) fs.mkdirSync(pathCheck, { recursive: true });
    
    console.log(`Loading ${conf.api}...`);
    let hierarchy = await getAPIHierarchy(conf);
    console.log(`Generating files for ${conf.api}...`);
    generateFiles({ ...conf, hierarchy });
  }
}