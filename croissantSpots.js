module.exports = class croissantSpots {


// returns array of top 5 croissant locations
static getTop5Stores(location) {


const yelp = require ('yelp-fusion');
const client = yelp.client ('18cBGcpEgVwkw3Ldf4ENePT1PxgHnKGAE-prRnDTre4jtNxeWS3wVjHya9EU7HUmVQwZ8_NKzmUz1wuiYoAepmGNm7fZrV0CYIMmBB8btBMyEDQolEkOIz5Q4ygHYnYx');

client.search({
  term: 'croissant',
  location: this.location, // using the pass through location
  categories: 'bakeries,cakeshop'
}).then(response => {
  
  let limit = 5;

  if(response.jsonBody.businesses.length < 5){
    limit = response.jsonBody.businesses.length
  }

  const top5 = [];

  for (let i = 0; i < limit;i++){
  
   top5[i] = [{name:response.jsonBody.businesses[i].name, rating:response.jsonBody.businesses[i].rating, location:response.jsonBody.businesses[i].location.address1 }];
  
  }
  
}).catch(e => {
  console.log(e);
});

return top5;

}
