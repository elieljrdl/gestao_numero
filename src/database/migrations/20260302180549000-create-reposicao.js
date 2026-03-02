'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('historico_reposicao', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      motivo: {
        type: Sequelize.STRING
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'id'
        }
      },
      conexao_before_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'conexoes',
          key: 'id'
        }
      },
      conexao_after_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'conexoes',
          key: 'id'
        }
      },
      numero_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'numeros',
          key: 'id'
        }
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
    await queryInterface.dropTable('historico_reposicao');
  }
};