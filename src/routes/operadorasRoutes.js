import express from "express";
import OperadoraController from "../controllers/operadoraController.js";

const routes = express.Router();


routes.get("/operadoras", OperadoraController.listarOperadora);
routes.post("/operadoras", OperadoraController.criarOperadora);

export default routes;