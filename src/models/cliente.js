'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cliente.hasMany(models.Conexao, {
        foreignKey: 'cliente_id',
      });

      Cliente.hasMany(models.Whatsapp, {
        foreignKey: 'carteira_id'
      });
    
      
    }
  }
  Cliente.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
    tableName: 'clientes'
  });
  return Cliente;
};