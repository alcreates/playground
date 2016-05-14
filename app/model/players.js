// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize"); 
// sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
var sequelize = require("../config/connection.js"); 

// Creates a "Character" model that matches up with DB
var Player = sequelize.define("player", {
	ID: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	
	Screen_Name: {
		type: Sequelize.STRING,
	},
	Password: {
		type: Sequelize.STRING,
	},
	FBHashmark: {
		type: Sequelize.STRING,
	},
	Total_Wins: {
		type: Sequelize.INTEGER,
	},
	Total_Losses: {
		type: Sequelize.INTEGER,
	},
	High_Score: {
		type: Sequelize.INTEGER,
	},
	Total_Score: {
		type: Sequelize.BOOLEAN,
	},
	Willing_To_Play: {
		type: Sequelize.BOOLEAN,
	},
	Log_In_Time: {
		type: Sequelize.TIME,
	}
});

// Syncs with DB
Player.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Player;