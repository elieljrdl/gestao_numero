import express from "express";
import sequelize from "./config/dbConfig.js";
import "./models/index.js";
import routes from "./routes/index.js";

try {
  await sequelize.authenticate();
  console.log("Conectado ao PostgreSQL");
} catch (error) {
  console.error("Erro ao conectar:", error);
}

// console.log(Object.keys(sequelize.models));
await sequelize.sync();

const app = express();
routes(app);

export default app;