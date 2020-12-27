'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserPackages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
     },
     username: {
        type: Sequelize.STRING
     },
     packageId: {
        type: Sequelize.INTEGER
     },
     createdAt: {
        allowNull: false,
        type: Sequelize.DATE
     },
     updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
     }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserPackages');
  }
};