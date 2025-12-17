import { DataTypes, STRING } from "sequelize";
import sequelize from "../config/dbConfig.js";

const Cliente =  sequelize.define("Cliente", {
    nome: DataTypes.STRING,
    url: DataTypes.STRING
})

export default Cliente;