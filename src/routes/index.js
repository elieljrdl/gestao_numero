const express = require('express')
const clientes = require('./clientesRoutes.js')

const routes = (app) => {

    app.use(
        express.json(),
        clientes,

    );
}

module.exports = routes;