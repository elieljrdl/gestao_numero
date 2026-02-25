const Controller = require('./Controller.js');
const PerfilServices = require('../services/PerfilServices.js')

const perfilServices = new PerfilServices();

class PerfilController extends Controller {
    constructor() {
        super(perfilServices)
    }
}

module.exports = PerfilController;