
// Dependencies
var Sequelize = require("sequelize");

// Lists out connection options
var source = {

    localhost: {
        port: 3000,
        host: 'localhost',
        user: 'root',
        password: "darksouls",
        database: "gametest"
    },

    jawsDB: {
        port: 3306,
        host: 'izm96dhhnwr2ieg0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'tmbe2cclke22jl0m',
        password: "ivwn05n5renz13kd",
        database: "prz7uvdzcprfg4jq" 
    }
}

// Selects a connection (can be changed quickly as needed)
var selectedSource = source.localhost;

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
  host: selectedSource.host,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

// Exports the connection for other files to use
module.exports = sequelize;