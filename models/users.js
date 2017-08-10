module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    // Giving the Users model a name, and userName
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    }
  });

  Users.associate = function(models) {
    // Associating User with MovieTitles
    // When an Author is deleted, also delete any associated MovieTitles
    Users.hasMany(models.Movieids, {
      onDelete: "cascade"
    });
  };

  return Users;
};