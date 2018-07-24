
var friend = require("../data/friends.js")

// define the routes for our html pages and export
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friend);
    });

    app.post("/api/friends", function (req, res) {
        console.log("Posting to api/friends");
        

        // grade scores of other users and find best match
        console.log( "================================================================");

        // the total scores of each of the other users
        var friendRatings = [];

        // go through every friend, find score
        for (var i = 0; i < friend.length; i++) {
            console.log("Rating: "+friend[i].name);
            var curFriendScore = 0;

            for (var j in friend[i].scores) {
                //console.log(friend[i].scores[j]);

                //console.log(`${j}: ${req.body.scores[j]} - ${friend[i].scores[j]}  ${5 - Math.abs(friend[i].scores[j] - req.body.scores[j] )}`);

                // compare answers; add 5 if matching answers,  4 if different by 1, etc..
                // it gives you more points the closer your two answers are
                curFriendScore += 5 - Math.abs(friend[i].scores[j] - req.body.scores[j]);
            }

            // add the final score to the list of potential friends
            friendRatings.push(curFriendScore);
        }
        console.log( "================================================================");

        console.log("friend scores: " + friendRatings);

        // find best friend
        var bestFriendInd = 0;
        for(var k in friendRatings){
            if(friendRatings[k] > friendRatings[bestFriendInd]){
                bestFriendInd = k;
            }
        }

        // log best friend
        console.log("Best Friend: ",friend[bestFriendInd] );

        // add current user to list of users (done after so site doesn't try to match with self)
        friend.push(req.body);

        // return the best friend 
        res.json(friend[bestFriendInd]);


    });

}