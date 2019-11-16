
const request = require('request');
var api_key="d667cde129c08508294c66722911d7de";

 url="https://api.darksky.net/forecast/"+api_key+'/'+latitude+","+longitude;
  // url="https://api.darksky.net/forecast/d667cde129c08508294c66722911d7de/37.8267,-122.4233";
// console.log(url)
   request(url, { json: true }, (err, res, body) => {
   if (err) { return console.log(err); }
  console.log(res);
  // console.log(body.explanation);
});
// exports.func1=func1;