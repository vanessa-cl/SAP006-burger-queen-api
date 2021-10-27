'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Users', [
      {
        name: "tyler",
        email: "tylerdurden@email.com",
        password: "123456",
        role: "chef",
        restaurant: "Fight Club Burger",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Norton",
        email: "norton@email.com",
        password: "654321",
        role: "attendant",
        restaurant: "Fight Club Burger",
        createdAt: new Date(),
        updatedAt: new Date()
      }
     ], {});
  },

  down: async (queryInterface, Sequelize) => {

  }
};
