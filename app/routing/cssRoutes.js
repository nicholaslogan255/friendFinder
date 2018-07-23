var path = require("path");


// define the routes for our html pages and export
module.exports = function (app) {
    
    app.get("/css/main", function (req, res) {
        console.log("Getting Main.css");
        res.sendFile(path.join(__dirname, "../public/css/main.css"));
    });

    
}