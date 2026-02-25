'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Whatsapp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Whatsapp.belongsTo(models.Conexao, {
        foreignKey: 'conexao_id'
      });
      Whatsapp.belongsTo(models.Perfil, {
        foreignKey: 'perfil_id'
      });
      Whatsapp.belongsTo(models.Numero, {
        foreignKey: 'numero_id'
      });
      Whatsapp.belongsTo(models.Cliente, {
        foreignKey: 'carteira_id'
      });
    }
  }
  Whatsapp.init({
    perfil: DataTypes.STRING,
    observacao: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Whatsapp',
    tableName: "whatsapps"
  });
  return Whatsapp;
};