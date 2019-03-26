//connect JSON file, the array of objects
var friends = require("../data/friends.js");

//module.exports to house everything
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

// make API post requests
app.post("/api/friends", function(req, res) {
    var totalDifference = 0;
    var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 1000
    };
    var userData = req.body;
    var userName = userData.scores;
    var userScores = userData.scores;

    var b = userScores.map(function(item) {
        return parseInt(item, 10);
    });
    userData = {
        name: req.body.name,
        photo: req.body.photo,
        scores: b
    }; 

    console.log("Name: " + userName);
    console.log("User score " + userScores);

    var sum = b.reduce((a, b) => a + b, 0);
    console.log("Sum of users score " + sum);
    console.log("Best match friend diff " + bestMatch.friendDifference);
    console.log("+++++++++++=================");

    for(var i = 0; i < friends.length; i++) {
        console.log(friends[i].name);
        totalDifference = 0;
        console.log("Total Diff " + totalDifference);
        console.log("Best match friend diff " + bestMatch.friendDifference);

        var bfriendScore = friens[i].scores.reduce((a,b) => a + b, 0);
        console.log("Total friend score " + bfriendScore);
        totalDifference += Math.abs(sum - bfriendScore)
        console.log("----------------->" + totalDifference);

// create the if statment that will sum the differences and 
// determine the best math for the friend

    if(totalDifference <= bestMatch.friendDifference) {
       bestMatch.name = friends[i].name;
       bestMatch.photo = friends[i].photo;
       bestMatch.friendDifference = totalDifference; 
    }
    console.log(totalDifference + " Total Difference");
} 

console.log(bestMatch);
friends.push(userData);
console.log("New User added");
console.log(userData);
res.json(bestMatch);
});
};
