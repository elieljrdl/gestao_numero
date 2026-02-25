'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Celular extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Celular.hasMany(models.Perfil, {
        foreignKey: "celular_id"
      });
    }
  }
  Celular.init({
    numero_identificador: DataTypes.STRING,
    modelo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Celular',
    tableName: 'celulares'
  });
  return Celular;
};