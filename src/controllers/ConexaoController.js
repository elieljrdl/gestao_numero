const Controller = require('./Controller.js');
const ConexaoServices = require('../services/ConexaoServices.js')

const conexaoServices = new ConexaoServices();

class ConexaoController extends Controller {
    constructor() {
        super(conexaoServices)
    }

    async getConexaoForCliente(req, res) {
        const { clienteId } = req.params;
         try {
            const listConexoes = await conexaoServices.getConexaoIdCliente(Number(clienteId))
            res.status(200).json(listConexoes);
         } catch (erro) {
            res.status(500).json({mensagem: `Erro ao buscar as conexoes ${erro}`})
         }
    }    
}

module.exports = ConexaoController;