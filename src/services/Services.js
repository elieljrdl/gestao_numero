const db = require('../models')

class Services {
    constructor(nomeDoModel) {
        this.model = nomeDoModel
    }

    async getAllForDb(page, limit) {
        const offset = (page - 1) * limit;
        const resultado = await db[this.model].findAndCountAll({
            limit,
            offset
        });

        return {
            total: resultado.count,
            paginaAtual: page,
            totalPaginas: Math.ceil(resultado.count / limit),
            dados: resultado.rows
        }
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