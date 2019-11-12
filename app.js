var express = require("express");
var app = express();
app.use(express.static("public"));
var bodyParser = require('body-parser');  
var urlencodedParser = bodyParser.urlencoded({ extended: false }) 

app.get("/form", function(req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

// app.get("/form2", function(req, res) {
//   res.sendFile(__dirname + "/" + "./abc/index1.html");
// });

// app.get("/form3", function(req, res) {
//   res.sendFile(__dirname + "/" + "./xyz/pqr/index2.html");
// });

app.get("/abc", function(req, res) {
  response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

app.get("/getform", function(req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

//post request
app.post('/postuser', urlencodedParser, function (req, res) {  
  // Prepare output in JSON format  
  response = {  
      first_name:req.body.first_name,  
      last_name:req.body.last_name  
  };  
  console.log(response);  
  res.end(JSON.stringify(response));  
})  

var server = app.listen(8000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
