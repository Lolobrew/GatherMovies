module.exports = function(sequelize, DataTypes) {
  var Movieids = sequelize.define("Movieids", {
  });

  //foreign key for MovieTitles(UsersID)
  Movieids.associate = function(models) {
    // We're saying that a MovieTitle should belong to a User
    // A MovieTitle can't be created without an User due to the foreign key constraint
    Movieids.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
    //A MovieTitles has attributes from a FullMovie
    Movieids.hasOne(models.FullMovies, {
        foreignKey: {
            allowNull: false
        }
    });

  };

  return Movieids;
};
