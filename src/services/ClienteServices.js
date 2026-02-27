const Services = require('./Services.js')
const db = require('../models')

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
}

module.exports = ClienteServices