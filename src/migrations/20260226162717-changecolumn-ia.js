'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('conexoes','cliente_id',{
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'clientes', key: 'id' },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    await queryInterface.changeColumn('perfis','celular_id',{
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'celulares', key: 'id' },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    await queryInterface.changeColumn('whatsapps','conexao_id',{
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'conexoes', key: 'id' },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    });

    await queryInterface.changeColumn('whatsapps','perfil_id',{
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'perfis', key: 'id' },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    await queryInterface.changeColumn('whatsapps','carteira_id',{
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'clientes', key: 'id' },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('whatsapps', {
      fields: ['numero_id'],
      type: 'unique',
      name: 'unique_whatsapp_numero'
    });
  },

  async down(queryInterface, Sequelize) {
    // se necessário, reverter para o estado anterior
    await queryInterface.removeConstraint('whatsapps','unique_whatsapp_numero');
  }
};
