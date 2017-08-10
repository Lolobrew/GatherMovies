var express = require ("express");

var router = express.Router();

var path = require ("path");

// Import the model (burger.js) to use its database functions.
var model = require ("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.sendfile(path.join(__dirname, "../public/home.html"));
});

router.get("/login", function(req, res){
  res.sendfile(path.join(__dirname, "../login.html"));
});

router.get("/users", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/userpage.html"));
});
// Export routes for server.js to use.
module.exports = router;