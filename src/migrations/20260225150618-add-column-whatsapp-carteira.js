'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.addColumn('whatsapps', 'carteira_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'clientes', key: 'id'
        }
      });
    
  },

  async down (queryInterface, Sequelize) {
 
    await queryInterface.removeColumn('whatsapps', 'carteira_id');
     
  }
};
