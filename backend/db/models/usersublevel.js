const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserSublevel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Sublevel }) {
      UserSublevel.User = UserSublevel.belongsTo(User, { foreignKey: 'user_id' });
      UserSublevel.Sublevel = UserSublevel.belongsTo(Sublevel, { foreignKey: 'sublevel_id' });
    }
  }
  UserSublevel.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
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
    modelName: 'UserSublevel',
    tableName: 'UserSublevels',
  });
  return UserSublevel;
};
