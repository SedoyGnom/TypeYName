const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Hint extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Sublevel }) {
      Hint.Sublevel = Hint.belongsTo(Sublevel, { foreignKey: 'sublevel_id' });
    }
  }
  Hint.init({
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
    sublevel_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Sublevels',
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
    modelName: 'Hint',
    tableName: 'Hints',
  });
  return Hint;
};
