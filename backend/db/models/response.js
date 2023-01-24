const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Response extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Sublevel }) {
      Response.Sublevel = Response.belongsTo(Sublevel, { foreignKey: 'sublevel_id' });
    }
  }
  Response.init({
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
      references: { model: 'Sublevels', key: 'id' },
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
    modelName: 'Response',
  });
  return Response;
};
