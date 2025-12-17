import { DataTypes, STRING } from "sequelize";
import sequelize from "../config/dbConfig.js";

const Conexao = sequelize.define("Conexao", {
    nome: DataTypes.STRING,
    dataAtivacao: {
    type: DataTypes.DATE,
    allowNull: false
  },
  dataCancelamento: {
    type: DataTypes.DATE
  }
});

export default Conexao;