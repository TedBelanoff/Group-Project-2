module.exports = function(sequelize, DataTypes) {
   var Event = sequelize.define("Event", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    start: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: false
    },
    end: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: false
    },
    text: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    eventType: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    interest: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    priceMin: {
      type: DataTypes.FLOAT,
      allowNull: false,
      unique: false,
    },
    priceMax: {
      type: DataTypes.FLOAT,
      allowNull: false,
      unique: false
    }
  });

  return Event;
};