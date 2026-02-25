'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Numero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Numero.hasMany(models.Whatsapp, {
        foreignKey: 'numero_id'
      });

      Numero.belongsTo(models.Status, {
        foreignKey: 'status_id'
      })
    }
  }
  Numero.init({
    numero: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Numero',
    tableName: 'numeros'
  });
  return Numero;
};