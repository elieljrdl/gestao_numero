import { DataTypes } from "sequelize";
import sequelize from "../config/dbConfig.js";

const Status = sequelize.define("Status", {
    nome: DataTypes.STRING,
});

export default Status;