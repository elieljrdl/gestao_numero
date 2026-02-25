const Controller = require('./Controller.js');
const CelularServices = require('../services/CelularServices.js')

const celularServices = new CelularServices();

class CelularController extends Controller {
    constructor() {
        super(celularServices)
    }
}

module.exports = CelularController;