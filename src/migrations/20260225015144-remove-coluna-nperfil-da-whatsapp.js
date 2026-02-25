'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.removeColumn('whatsapps', 'perfil' );
    
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.addColumn('whatsapps', 'perfil', {
      type: Sequelize.STRING,
      allowNull: true
    } );
  }
};
