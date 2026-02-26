const Services = require('./Services.js')
const db = require('../models')

class WhatsappServices extends Services {
    constructor() {
        super('Whatsapp');
    }

    // impedimos associação de um número a mais de um WhatsApp activo
    async createItem(bodyCreate) {
        const exists = await db.Whatsapp.findOne({ where: { numero_id: bodyCreate.numero_id } });
        if (exists) {
            const err = new Error('este número já está vinculado a outro WhatsApp');
            err.name = 'BusinessRuleError';
            throw err;
        }
        return super.createItem(bodyCreate);
    }

    async updateItem(bodyUpdate, id) {
        if (bodyUpdate.numero_id) {
            const conflict = await db.Whatsapp.findOne({
                where: { numero_id: bodyUpdate.numero_id, id: { [db.Sequelize.Op.ne]: id } }
            });
            if (conflict) {
                const err = new Error('este número já está vinculado a outro WhatsApp');
                err.name = 'BusinessRuleError';
                throw err;
            }
        }
        return super.updateItem(bodyUpdate, id);
    }
}

module.exports = WhatsappServices