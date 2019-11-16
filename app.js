
 var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fetched_city_name;

app.use(bodyParser.urlencoded({ extended: false }));
app.get('.',()=>{
	res.send("hi");
})
app.post('/myaction', function(req, res) {

   fetched_city_name=req.body.name;
   res.send("You sent the name " + req.body.name);

   const val = req.body.name;
   console.log(val);
}); 

app.listen(8080, function(){
  console.log('Server running at http://127.0.0.1:8080/');
});

exports.fetched_city_name=fetched_city_name;

  