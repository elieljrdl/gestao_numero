const Controller = require('./Controller.js');
const ClienteServices = require('../services/ClienteServices.js');

const clienteServices = new ClienteServices();


class ClienteController extends Controller {
    constructor() {
        super(clienteServices)
    }

    async getClienteFilters(req, res) {
        try {
            const { nome } = req.query;
            const clientes = await clienteServices.getClienteFilters(nome);
            res.status(200).json(clientes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = ClienteController;