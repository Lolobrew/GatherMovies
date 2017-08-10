var db = require("../models");

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    db.Users.findAll({
        include: db.FullMovies
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

};
