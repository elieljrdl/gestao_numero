'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.removeColumn('numeros', 'status_id');
   
  },

  async down (queryInterface, Sequelize) {
   
 
    await queryInterface.addColumn('numeros', 'status_id',
       {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'status', key: 'id'}

    });
     
  }
};
