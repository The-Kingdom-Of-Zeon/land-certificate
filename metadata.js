const fs = require('fs')

let content = '';

for (i=1;i<=3000;i++) {
content = `
{
  "name": "Zeon World LAND Certificate #${i}",
  "description": "Zeon.world metaverse city of Los Angeles NFT land collection",
  "image": "https://meta.zeon.world/metadata/${i}.jpg",
  "dna": "00${i}00${3000-i}d",
  "edition": 1,
  "date": ${Date.now()},
  "attributes": [
    {
      "trait_type": "Land",
      "value": "Plot #${i}"
    }
  ],
  "compiler": "Zeon World Engine"
}
` 

fs.appendFile(`./metadata/${i}.json`, content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})
}