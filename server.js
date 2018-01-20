var express = require('express');
var ig = require('instagram-node').instagram();

var app = express();

//where to look for site resources
app.use(express.static(__dirname + '/public'));

//set the view engine ejs
app.set('view engine', 'ejs');



//instagram access token (grab at )
ig.use({
	access_token: 'MY ACCESS TOKEN', 
});

//routes - home -> popular images
app.get('/', function(req, res) {
	//use the instagram package to get popular media
	 ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {        
	 	// render the home page and pass in the popular images       
		res.render('pages/index', { grams: medias });    
	});

	
});

//start the server
app.listen(8080);
console.log('App Started in http://localhost:8080');