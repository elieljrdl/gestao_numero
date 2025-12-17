import { DataTypes } from "sequelize";
import sequelize from "../config/dbConfig.js";

const Operadora = sequelize.define("Operadora", {
    nome: DataTypes.STRING
});

export default Operadora