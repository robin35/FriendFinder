// Path is a built-in Node module.  Helps us get the specific path to a file because an absolute path is needed
var path = require("path");

// __dirname gives the full absolute path (allows for changes based on different operating systems)
module.exports = function(app) {

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../pages/survey.html"));
    });

    // If no matching route is found default to home
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "/../pages/home.html"));
    });




}

