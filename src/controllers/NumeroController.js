const Controller = require('./Controller.js');
const NumeroServices = require('../services/NumeroServices.js')

const numeroServices = new NumeroServices();

class NumeroController extends Controller {
    constructor() {
        super(numeroServices)
    }
}

module.exports = NumeroController;