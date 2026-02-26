'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Conexao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Conexao.belongsTo(models.Cliente, {
        foreignKey: 'cliente_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });

      Conexao.hasMany(models.Whatsapp, {
        foreignKey: 'conexao_id',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      });
    }
  }
  Conexao.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Conexao',
    tableName: 'conexoes'
  });
  return Conexao;
};