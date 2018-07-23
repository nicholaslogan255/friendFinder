
var friend = require("../data/friends.js")

// define the routes for our html pages and export
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friend);
    });

    app.post("/api/friends", function (req, res) {
       console.log( req.body.newFriend);

        friend.push(req.body.newFriend);
    });

}