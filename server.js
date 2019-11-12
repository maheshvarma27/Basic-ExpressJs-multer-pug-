var express = require('express');  
var app = express();  
//var path = require('path');
//set view engine  
app.set('view engine', 'pug');
//app.set("views", path.join(__dirname, "views"));

app.get('/', function (req, res) {    
 res.render('index');  
});  


var server = app.listen(5000, function () {  
    console.log('Node server is running..');  
});  