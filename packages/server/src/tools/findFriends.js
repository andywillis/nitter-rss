import { readFile, writeFile } from 'fs/promises';

import rootname from '../../rootname.js';

const accountName = 'woodsbythesea';

async function main(nitterUrl) {
  const json = await readFile(`${rootname}/data/${accountName}_reduced.json`, 'utf8');
  const data = JSON.parse(json);
  const friends = data
  	.filter(obj => obj.visible && obj.category === 'friends')
  	.map(obj => obj.partialPaths.rss);
  await writeFile(`${rootname}/data/${accountName}_visiblefriends.json`, JSON.stringify(friends), 'utf8');
  console.log('File written');
}

main();
