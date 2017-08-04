module.exports = function(sequelize, DataTypes) {
  var MovieTitles = sequelize.define("MovieTitles", {
      //gives MovieTitles a title
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  //foreign key for MovieTitles(UsersID)
  MovieTitles.associate = function(models) {
    // We're saying that a MovieTitle should belong to a User
    // A MovieTitle can't be created without an User due to the foreign key constraint
    MovieTitles.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
    //A MovieTitles has attributes from a FullMovie
    MovieTitles.hasMany(models.FullMovies, {
        foreignKey: {
            allowNull: false
        }
    });

  };

  return MovieTitles;
};
