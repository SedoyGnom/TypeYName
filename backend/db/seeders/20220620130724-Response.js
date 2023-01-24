module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Responses', [{

      body: 'govno',
      sublevel_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {

      body: 'huinya',
      sublevel_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {

      body: 'davay po novoy',
      sublevel_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Responses', null, {});
  },
};
