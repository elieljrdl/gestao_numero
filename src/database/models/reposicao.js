'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reposicao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reposicao.belongsTo(models.Usuario, {
        foreignKey: 'usuario_id'
      });

      Reposicao.belongsTo(models.Conexao, {
        foreignKey: 'conexao_before_id'
      });

      Reposicao.belongsTo(models.Conexao, {
        foreignKey: 'conexao_after_id',
        
      });

      Reposicao.belongsTo(models.Numero, {
        foreignKey: 'numero_id'
      });
    }
  }
  Reposicao.init({
    motivo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reposicao',
    tableName: 'historico_reposicao',
  });
  return Reposicao;
};