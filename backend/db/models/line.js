const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Line extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Sublevel }) {
      Line.Sublevel = Line.belongsTo(Sublevel, { foreignKey: 'sublevel_id' });
    }
  }
  Line.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    body: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    order: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    sublevel_id: {

      allowNull: false,
      references: {
        model: 'Sublevels',
        key: 'id',
      },
      type: DataTypes.INTEGER,
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
    modelName: 'Line',
    tableName: 'Lines',
  });
  return Line;
};
