var city=require('./app.js');
// var api=require('./weather_api.js');
const request = require('request');
var api_key="d667cde129c08508294c66722911d7de";

fetched_city_name=city.fetched_city_name;

var longitude;
var latitude;
var arr;

const opencage = require('opencage-api-client');

 opencage.geocode({q:fetched_city_name}).then (data => {
  // console.log(JSON.stringify(data));
  // geodata=JSON.stringify(data);
  // console.log(geodata)
  // console.log(JSON.parse(geodata))
  if (data.status.code == 200) {
    if (data.results.length > 0) {
      var place = data.results[0];
      //console.log(place.formatted);
       //console.log(place.geometry);
        geodata=place.geometry;
        longitude=geodata.lng;
        latitude=geodata.lat;
        // console.log(latitude)
        // console.log(longitude)

        url="https://api.darksky.net/forecast/"+api_key+'/'+latitude+","+longitude;

      // console.log(place.annotations.timezone.name);
    }
  } else if (data.status.code == 402) {
    console.log('hit free-trial daily limit');
    console.log('become a customer: https://opencagedata.com/pricing'); 
  } else {
    // other possible response codes:
    // https://opencagedata.com/api#codes
    console.log('error', data.status.message);
        }

}).then(()=> request(url, { json: true }, (err, res, body) => {
   if (err) { return console.log(err); }
  console.log(res);
  // console.log(body.explanation);
}))
// console.log("hii")