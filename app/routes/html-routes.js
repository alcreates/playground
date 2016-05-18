// Dependencies
// =============================================================
var path 		= require('path');


// Routes
// =============================================================
module.exports = function(app){

	// Each of the below routes just handles the HTML page that the user gets sent to.
	app.get('/', function(req, res){
		console.log("test");
		res.sendFile(path.join(__dirname + '/../public/test.html'));
	});

	// app.get('/playroom', function(req, res){
	// 	console.log("playroom reached!");

	// 	console.log(path.join(__dirname,'../public/playroom.html'));
	
	// 	res.sendFile("john");
		
		
	// });

	app.get('/playroom', function(req, res){
		console.log("playroom!")
		res.sendFile(path.join(__dirname + '/../public/playroom.html'));
	});

}
