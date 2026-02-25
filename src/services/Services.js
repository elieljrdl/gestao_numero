const db = require('../models')

class Services {
    constructor(nomeDoModel) {
        this.model = nomeDoModel
    }

    async getAllForDb() {
        return db[this.model].findAll();
    }

    async getOneItemForId(id) {
        return db[this.model].findByPk(id);
    }

    async createItem(bodyCreate) {
        return db[this.model].create(bodyCreate)
    }

    async updateItem(bodyUpdate, id) {
        const listItensUpdate = db[this.model].update(bodyUpdate, {
            where: {id: id}
        });

        if (listItensUpdate[0] === 0 ) {
            return false
        }

        return true
    }

    async deleteItem(id) {
        return db[this.model].destroy({where: {id: id}})
    }
}

module.exports = Services