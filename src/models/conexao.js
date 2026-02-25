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
        foreignKey: 'cliente_id'
      });

      Conexao.hasMany(models.Whatsapp, {
        foreignKey: 'conexao_id'
      })
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