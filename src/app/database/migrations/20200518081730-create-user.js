'use strict';
module.exports = {
  up: (queryInterface, Sequelize, done) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(function () {
        /*  username:imran 
            password:immy
            this is only one entry bcz we don't have register funcitonality that's why we provide one*/
        queryInterface.sequelize.query(`INSERT INTO users (id,username,password) VALUES (NULL, 'imran', '$2b$10$MObb7aSQ6r7xA1DFIAVhhOr.4.UMSXdaLBknWtB74OUEGsdNSIfoi')`);
      done();
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};