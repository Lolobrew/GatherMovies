module.exports = function(sequelize, DataTypes) {
  var MovieID = sequelize.define("MovieID", {
  });

  //foreign key for MovieTitles(UsersID)
  MovieID.associate = function(models) {
    // We're saying that a MovieTitle should belong to a User
    // A MovieTitle can't be created without an User due to the foreign key constraint
    MovieID.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
    //A MovieTitles has attributes from a FullMovie
    MovieID.hasOne(models.FullMovies, {
        foreignKey: {
            allowNull: false
        }
    });

  };

  return MovieID;
};
