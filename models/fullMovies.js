module.exports = function(sequelize, DataTypes) {
  var FullMovies = sequelize.define("FullMovies", {
      //gives FullMovies a title, genre, plot, rating, year, runtime, director, and actors
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    plot: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [10]
        }
    },
    rating: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    year: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    runTime: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    director: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    actors: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    }

  });

    //foreign key for FullMovies (MovieTitlesID)
  FullMovies.associate = function(models) {
    // We're saying that FullMovies should belong to a MovieTitle
    FullMovies.belongsTo(models.MovieTitles, {
      foreignKey: {
        allowNull: false
      }
    });

  };

  return FullMovies;
};
