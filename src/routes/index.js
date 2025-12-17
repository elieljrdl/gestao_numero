import express from "express";
import operadoras from "../routes/operadorasRoutes.js"

const routes = (app) => {

    app.use(express.json(), operadoras);
}

export default routes;