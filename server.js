// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express 	= require('express');
var bodyParser 	= require('body-parser');
var path = require('path');



// Sets up the Express App
// =============================================================
var app = express();

app.use(express.static(__dirname + '/public'));
var PORT = process.env.PORT || 8080;


// app.use('/images',express.static(path.join(__dirname + '/images')));
// app.use('/js',express.static(path.join(__dirname + '/js')));
// app.use('/css',express.static(path.join(__dirname + '/css')));
// app.use('/public/font',express.static(path.join(__dirname + '/public/font')));
// app.use('/public/fonts',express.static(path.join(__dirname + '/public/fonts')));

// app.use('/public/oauth', express.static(path.join(__dirname + '/public/oauth')));

// app.use('/assets', express.static(path.join(__dirname + '/public/assets')));
// app.use('/css', express.static(path.join(__dirname + '/public/assets/css')));
// app.use('/font', express.static(path.join(__dirname + '/public/assets/font')));
// app.use('/fonts', express.static(path.join(__dirname + '/public/assets/fonts')));
// app.use('/images', express.static(path.join(__dirname + '/public/assets/images')));
// app.use('/js',express.static(path.join(__dirname + '/public/assets/js')));
// app.use('/oauth', express.static(path.join(__dirname + '/public/assets/oauth')));



// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));




// Routes
// =============================================================

require("./app/routes/api-routes.js")(app)
require("./app/routes/html-routes.js")(app)




// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})