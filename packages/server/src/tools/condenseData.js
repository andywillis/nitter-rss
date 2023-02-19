import { v4 as uuidv4 } from 'uuid';
import { readFile, writeFile } from 'fs/promises';

import nitterSources from '../helpers/nitterSources';

import rootname from '../../rootname';

const accountName = process.argv[2];

function getCondensedData(data, nitterUrl) {

  return data.map(el => {
    
    const {
      screen_name: name,
      profile_image_url_https: avatar
    } = el;
    
    return {
      id: uuidv4(),
      name,
      partialPaths: {
        href: `${nitterUrl}/${name}/with_replies`,
        rss: `${nitterUrl}/${name}/with_replies/rss`
      },
      avatar
    };

  });

}

async function main(nitterUrl) {
  const json = await readFile(`${rootname}/data/${accountName}_followings.json`, 'utf8');
  const data = JSON.parse(json);
  const condensed = getCondensedData(data, nitterUrl);
  const condensedJson = JSON.stringify(condensed);
  await writeFile(`${rootname}/data/${accountName}_data.json`, condensedJson);
  console.log('Write completed');
}

async function findWorkingUrl(nitterSources) {
  const [ head, ...tail ] = nitterSources;
  try {
    const response = await fetch(`https://${head}`);
    if (response.ok) main(head);
  } catch (err) {
    console.error(`${head} could not be resolved`);
    setTimeout(() => findWorkingUrl(tail), 2000);
  }
}

findWorkingUrl(nitterSources);