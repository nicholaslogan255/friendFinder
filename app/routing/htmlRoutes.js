var path = require("path");


// define the routes for our html pages and export
module.exports = function (app) {
    
    app.get("/", function (req, res) {
        console.log("Getting Home Page");
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        console.log("Getting survey Page");
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}










