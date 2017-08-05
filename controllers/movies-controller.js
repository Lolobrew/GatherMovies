var express = require ("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var model = require ("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.redirect('/movies');
});




// Export routes for server.js to use.
module.exports = router;