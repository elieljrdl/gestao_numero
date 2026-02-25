'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Status.hasMany(models.Numero, {
        foreignKey: 'status_id'
      });
    }
  }
  Status.init({
    nome: DataTypes.STRING,
    disponivel: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Status',
    tableName: 'status'
  });
  return Status;
};