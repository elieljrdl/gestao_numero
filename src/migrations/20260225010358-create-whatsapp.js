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
      tipo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      observacao: {
        type: Sequelize.TEXT
      },
      conexao_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: { model: 'conexoes', key: 'id'}
      },
      perfil_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'perfis', key: 'id'},
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      carteira_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: { model: 'clientes', key: 'id'}
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