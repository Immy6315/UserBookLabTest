export default (sequelize, Sequelize) => {
  const Package = sequelize.define("package", {
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
  });
  return Package;
};