'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Perfil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Perfil.hasMany(models.Whatsapp, {
        foreignKey: 'perfil_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });

      Perfil.belongsTo(models.Celular, {
        foreignKey: 'celular_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  Perfil.init({
    perfil: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Perfil',
    tableName: 'perfis'
  });
  return Perfil;
};