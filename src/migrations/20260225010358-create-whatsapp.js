'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('whatsapps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      perfil: {
        type: Sequelize.STRING
      },
      observacao: {
        type: Sequelize.TEXT
      },
      conexao_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'conexoes', key: 'id'}
      },
      perfil_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'perfis', key: 'id'}
      },
      numero_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'numeros', key: 'id'}
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('whatsapps');
  }
};