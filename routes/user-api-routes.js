var db = require("../models");

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
    db.Users.findAll({
        include: [db.FullMovies]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });


  app.get("/api/users/:name", function(req, res) {
    db.Users.findOne({
      where: {
        name: req.params.name,
      },
      include: [db.FullMovies]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });


  app.post("/api/users/:id", function(req, res) {
    db.FullMovies.create(req.body).then(function(dbMovie) {
      res.json(dbMovie);
    });
  });

};
