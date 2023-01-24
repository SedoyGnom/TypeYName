module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Hints', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      body: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      sublevel_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Sublevels',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Hints');
  },
};
