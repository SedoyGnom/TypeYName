const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sublevel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Level, Hint, UserSublevel, Line, Answer, Response,
    }) {
      Sublevel.Level = Sublevel.belongsTo(Level, { foreignKey: 'level_id' });
      Sublevel.Hint = Sublevel.hasMany(Hint, { foreignKey: 'sublevel_id' });
      Sublevel.UserSublevel = Sublevel.hasMany(UserSublevel, { foreignKey: 'sublevel_id' });
      Sublevel.Line = Sublevel.hasMany(Line, { foreignKey: 'sublevel_id' });
      Sublevel.Answer = Sublevel.hasMany(Answer, { foreignKey: 'sublevel_id' });

      Sublevel.Response = Sublevel.hasMany(Response, { foreignKey: 'sublevel_id' });
    }
  }
  Sublevel.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    level_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Levels',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Sublevel',
    tableName: 'Sublevels',
  });
  return Sublevel;
};
