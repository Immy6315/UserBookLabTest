'use strict';
let data = require('./list.json');
module.exports = {
  up: (queryInterface, Sequelize, done) => {
    return queryInterface.createTable('Packages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      objectID: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      popular: {
        type: Sequelize.STRING
      },
      labName: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      IncludedTests: {
        type: Sequelize.STRING
      },
      BestSellers: {
        type: Sequelize.STRING
      },
      Keyword: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      itemName: {
        type: Sequelize.STRING
      },
      itemId: {
        type: Sequelize.STRING
      },
      SNo: {
        type: Sequelize.INTEGER
      },
      testCount: {
        type: Sequelize.INTEGER
      },
      minPrice: {
        type: Sequelize.INTEGER
      },
      fasting: {
        type: Sequelize.INTEGER
      },
      availableAt: {
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
    }).then(function () {
        data.forEach((data)=>{
          queryInterface.sequelize.query(`insert into Packages (
            SNo,
            itemId,
            itemName,
            type,
            Keyword,
            BestSellers,
            testCount,
            IncludedTests,
            url,
            minPrice,
            labName,
            fasting,
            availableAt,
            popular,
            category,
            objectID
            ) 
            values (
            ${data["S.no"]},
            '${data["itemId"]}',
            '${data["itemName"]}',
            '${data["type"]}',
            '${data["Keyword"]}',
            '${data["Best-sellers"]}',
            ${data["testCount"]},
            '${data["Included Tests"]}',
            '${data["url"]}',
            ${data["minPrice"]},
            '${data["labName"]}',
            ${data["fasting"]},
            ${data["availableAt"]},
            '${data["popular"]}',
            '${data["category"]}',
            '${data["objectID"]}')`);
        })
        done();
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Packages');
  }
};