const request = require('request');
let catName = process.argv[2];
const address = `https://api.thecatapi.com/v1/breeds/search?q=${catName}`;

request(address,function(error, response, body) {
  if (error) {
    console.log('error:', error);
    return;
  }
  const data = JSON.parse(body);
  let breed = data[0];
  if (breed) {
    console.log(breed.description);
  } else {
    console.log(`${catName} is not found.`);
  }
});


 