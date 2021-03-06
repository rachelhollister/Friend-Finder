// dependencies
// We need to include the path package to get the correct file path for our html
var path = require("path");

//routing
//paths to be applied to buttons
module.exports = function(app) {
// HTML GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases the user is shown an HTML page of content

    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
    app.use(function(req, res){
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });

    // If no matching route is found default to home.html
    app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};