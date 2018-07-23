
var friend = require("../data/friends.js")

// define the routes for our html pages and export
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friend);
    });

    app.post("/api/friends", function (req, res) {
        console.log("Posting to api/friends");
       console.log( "req.body: ",req.body);

        friend.push(req.body);

        // TODO: grade scores of other users and find best match

        // go through every friend
        for(var i in friends){

            for(var j in friends.score){

            }
        }


    });

}