module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Levels', [{
      title: 'level-name 1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'level-name 2',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'level-name 3',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Levels', null, {});
  },
};
