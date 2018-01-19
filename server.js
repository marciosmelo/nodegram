var express = require('express');
var ig = require('instagram-node');

var app = express();

//where to look for site resources
app.use(express.static(__dirname + '/public'));

//set the view engine ejs
app.set('view engine', 'ejs');

//instagram access token

//routes
app.get('/', function(req, res) {
	res.render('pages/index');
});

//start the server
app.listen(8080);
console.log('App Started in http://localhost:8080');