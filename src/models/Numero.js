import { DataTypes, STRING } from "sequelize";
import sequelize from "../config/dbConfig.js";

const Numero = sequelize.define("Número", {
    numero: {
        type: DataTypes.STRING,
        unique: true
    }
});

export default Numero;