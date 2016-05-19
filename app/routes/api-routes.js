// Dependencies
// =============================================================
var Player = require("../model/players.js"); // Pulls out the Character Model

// Routes
// =============================================================
module.exports = function(app) {
// var currentURL = window.location.origin;
    // Search for Specific Character (or all characters) then provides JSON
    app.get('/api/userList', function(req, res) {

        // If the user provides a specific character in the URL...

        // Then display the JSON for ONLY that character.
        // (Note how we're using the ORM here to run our searches)
        Player.findAll({}).then(function(result) {
            res.json(result);
        })


        // Otherwise...

        // Otherwise display the data for all of the characters. 
        // (Note how we're using Sequelize here to run our searches)


    });

    // If a user sends data to add a new character...
    app.post('/api/playerlogin', function(req, res) {

        // Take the request...
        var player = req.body;
        var playerPassword = player.password
        console.log("this is player screen name " + player.screenName);
        console.log("this is player password " + player.password);

        // Then add the character to the database using sequelize
        Player.findAll({
            where: {
                Screen_Name: player.screenName
            }

        }).then(function(result) {
        	//console.log(result);
            console.log("this is the users screenname " + result[0].Screen_Name);
            console.log("this is the users password " + result[0].Password);




            if (result[0].Screen_Name == player.screenName && result[0].Password == playerPassword) {
                console.log("TRUE")
                    // //res.redirect('/playroom');
                
                Player.update(
                    {
                        Willing_To_Play: true,
                    },
                    {
                        where:{
                            id: result[0].ID,
                        }
                    
                }).then(function(){
                    res.send({redirect: '/playroom'});
                });

                

            } else {
                res.send({});
            }

        }).catch(function(err) {
            console.log("Wrong username or password");
        });
    });

    app.post('/api/newMember', function(req, res) {

        // Take the request...
        var player = req.body;


        // Then add the character to the database using sequelize
        Player.create({
            Screen_Name: player.screenName,
            Password: player.password,

        });
    });
}
