var path = require("path");


// define the routes for our html pages and export
module.exports = function (app) {
    
    app.get("/", function (req, res) {
        console.log("Home")
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/servey.html"));
    });
}










