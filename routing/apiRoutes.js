//===========================================================================================================
// Dependencies
//===========================================================================================================

var friends = require("../app/data/friends");


//===========================================================================================================
// Get data from friends.json to display in browser
//===========================================================================================================

module.exports = function(app){

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req,res) {
        
        var userData = req.body;   
        var userScores = userData.scores;
        
        var bestMatch  = {};
        var leastDiff = 40;

        console.log( "apiRoutes-beginning req.body : ", req.body );
        // console.log( "userScores: ", userScores );

        for (var i=0; i < friends.length; i++) {
            var diff = 0;
            var friendScores = friends[i].scores;
            var friendName = friends[i].name;
            var friendPhoto = friends[i].photo;

            for (var j=0; j < 10; j++) {
                diff += Math.abs(parseInt(userScores[j]) - parseInt(friendScores[j]));
            }

            console.log( "diff: ", diff );

            if ( diff < leastDiff ) {
                leastDiff = diff;

                bestMatch  = {
                    friendName: friendName,
                    friendPhoto: friendPhoto
                };

                
                console.log( "bestMatch : ", bestMatch );
            }
        }
     
        friends.push(req.body);
        
        console.log( "bestMatch (after for loop): ", bestMatch );

        res.json(bestMatch);
    });

}
