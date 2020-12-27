export default (sequelize, Sequelize) => {
   const UserPackage = sequelize.define("userpackage", {
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
   });
   return UserPackage;
 };
