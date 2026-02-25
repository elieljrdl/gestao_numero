const Services = require('./Services.js')
const db = require('../models')
class ConexaoServices extends Services {
    constructor() {
        super('Conexao');
    }

    async getConexaoIdCliente(idCliente) {
        return db.Conexao.findAll({
            where: {
                cliente_id: idCliente
            }
        })
    }    
}

module.exports = ConexaoServices