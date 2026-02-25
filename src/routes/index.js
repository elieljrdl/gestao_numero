const express = require('express')
const clientes = require('./clientesRoutes.js')
const celulares = require('./celularesRoutes.js')
const status = require('./statusRoutes.js')
const numeros = require('./numerosRoutes.js')
const whatsapps = require('./whatsappsRoutes.js')

const routes = (app) => {

    app.use(
        express.json(),
        clientes,
        celulares,
        status,
        numeros,
        whatsapps
    );
}

module.exports = routes;