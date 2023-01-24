module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Answers', [{
      answer: 'answer1',
      sublevel_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      answer: 'академия художеств',
      sublevel_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      answer: '9788070217740',
      sublevel_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      answer: 'бдр',
      sublevel_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      answer: 'answer5',
      sublevel_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Answers', null, {});
  },
};
