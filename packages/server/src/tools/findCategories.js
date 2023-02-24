import { readFile, writeFile } from 'fs/promises';

import rootname from '../../rootname.js';

const accountName = 'woodsbythesea';

async function main(nitterUrl) {
  const json = await readFile(`${rootname}/data/${accountName}_reduced.json`, 'utf8');
  const data = JSON.parse(json);
  const group = [...new Set(data.map(obj => obj.category))];
  await writeFile(`${rootname}/data/${accountName}_categories.json`, JSON.stringify(group), 'utf8');
  console.log(`File written: ${group.length} categories.`);
}

main();
