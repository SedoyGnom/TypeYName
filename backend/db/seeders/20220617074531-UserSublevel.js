module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserSublevels', [
      {
        user_id: 1,
        sublevel_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        user_id: 1,
        sublevel_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        user_id: 1,
        sublevel_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        user_id: 1,
        sublevel_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        user_id: 1,
        sublevel_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        user_id: 1,
        sublevel_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        user_id: 1,
        sublevel_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        user_id: 1,
        sublevel_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        user_id: 1,
        sublevel_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        user_id: 1,
        sublevel_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        user_id: 2,
        sublevel_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        user_id: 2,
        sublevel_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        user_id: 2,
        sublevel_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        user_id: 2,
        sublevel_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        user_id: 3,
        sublevel_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        user_id: 3,
        sublevel_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        user_id: 3,
        sublevel_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        user_id: 3,
        sublevel_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        user_id: 3,
        sublevel_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        user_id: 3,
        sublevel_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserSublevels', null, {});
  },
};
