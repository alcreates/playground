// Dependencies
// =============================================================
var Character 	= require("../model/players.js"); // Pulls out the Character Model

// Routes
// =============================================================
module.exports = function(app){

	// Search for Specific Character (or all characters) then provides JSON
	app.get('/api/:user?', function(req, res){

		// If the user provides a specific character in the URL...
		if(req.params.characters){

			// Then display the JSON for ONLY that character.
			// (Note how we're using the ORM here to run our searches)
			Character.findAll({
				where: {
					routeName: req.params.characters
				}
			}).then(function(result){
				res.json(result);
			})
		}

		// Otherwise...
		else{
			// Otherwise display the data for all of the characters. 
			// (Note how we're using Sequelize here to run our searches)
				Character.findAll({})
					.then(function(result){
						res.json(result);
				})
			};

	});

	// If a user sends data to add a new character...
	app.post('/api/newPlayer', function(req, res){

		// Take the request...
		var player = req.body;

		
		// Then add the character to the database using sequelize
		Player.create({
			Screen_Name: player.name,
			Password : player.password
			
		}).then(function(){
			res.redirect("/gameroom");

		});
		
	});
}