const Controller = require('./Controller.js');
const CelularServices = require('../services/CelularServices.js')

const celularServices = new CelularServices();

class CelularController extends Controller {
    constructor() {
        super(celularServices)
    }

    async getCelularFilters(req, res) {
        try {
            const { numeroAp, modelo } = req.query;
            const celulares = await celularServices.getCelularFilters(numeroAp, modelo);
            res.status(200).json(celulares);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = CelularController;