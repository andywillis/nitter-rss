import { readFile, writeFile } from 'fs/promises';

import rootname from '../../rootname.js';

const accountName = 'woodsbythesea';

const category = process.argv[2];

async function main(nitterUrl) {
  const json = await readFile(`${rootname}/data/${accountName}_reduced.json`, 'utf8');
  const data = JSON.parse(json);
  const group = data
  	.filter(obj => obj.visible && obj.category === category)
  	.map(obj => obj.partialPaths.rss);
  await writeFile(`${rootname}/data/${accountName}_visible${category}.json`, JSON.stringify(group), 'utf8');
  console.log(`File written: ${group.length} objects.`);
}

main();
