import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    process.env.POSTGRES_DB,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
    logging: false, // desativa logs SQL
  }
);

export default sequelize;