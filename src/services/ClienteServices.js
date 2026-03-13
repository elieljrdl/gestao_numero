const Services = require('./Services.js')
const { Op } = require('sequelize');
const db = require('../database/models');

class ClienteServices extends Services {
    constructor() {
        super('Cliente');
    }

    // exclusão em transacção para garantir integridade
    async deleteItem(id) {
        return db.sequelize.transaction(async t => {
            return db.Cliente.destroy({ where: { id }, transaction: t });
        });
    }

        async getFiltersService(filters) {
            const { nome } = filters;
            try {
                const where = {};
    
                if (nome) {
                    where.nome = {
                        [Op.iLike]: `%${nome}%`
                    };
                }
    
                const clientes = await db.Cliente.findAll({
                    where
                });
    
                return clientes;
            } catch (error) {
                throw error;
            }
        }
}
  


module.exports = ClienteServices