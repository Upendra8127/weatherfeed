var NodeGeocoder = require('node-geocoder');
 
var options = {
  provider: 'google',
 
  // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey:'730534cddc314331931f98d086bf240c', // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};
 
var geocoder = NodeGeocoder(options);
 
// Using callback
geocoder.geocode('29 champs elysée paris', function(err, res) {
  console.log(res);
});
 
// Or using Promise
geocoder.geocode('29 champs elysée paris')
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.log(err);
  });