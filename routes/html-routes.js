var path = require ("path");

// Create all our routes and set up logic within those routes where required.
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads home.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // login route loads login.html
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // users route loads userpage.html
  app.get("/users", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/userpage.html"));
  });

};