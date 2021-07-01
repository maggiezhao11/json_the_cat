const request = require('request');
//let catName = process.argv[2];
//const address = `https://api.thecatapi.com/v1/breeds/search?q=${catName}`;


const fetchBreedDescription = function(breedName, callback) {

  const address = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(address,function(error,response,body) {
    if (error) {
      //console.log('error:', error);
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    //console.log('data:', data);
    let breed = data[0];
    if (breed) {
      //console.log(breed.description);
      callback(null, breed.description);
    } else {
      callback('breed is not found');
      //console.log(`${breedName} is not found.`);
    }
  });


};


module.exports = { fetchBreedDescription };