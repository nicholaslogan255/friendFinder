// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT =  process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
// =============================================================
// imported routes and data from other files
var apiRoute = require("./app/routing/apiRoutes.js")(app);
var htmlRoute = require("./app/routing/htmlRoutes.js")(app);
var htmlRoute = require("./app/routing/cssRoutes.js")(app);
var friend = require("./app/data/friends.js")

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("Listening on http://localhost:" + PORT);
  });