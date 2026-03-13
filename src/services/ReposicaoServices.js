const Services = require('./Services.js')
const { Op } = require('sequelize');
const db = require('../database/models');

class ReposicaoServices extends Services {
    constructor() {
        super('Reposicao');
    }

    async getFiltersService(filters) {
        const { motivo } = filters;
        try {
            const where = {};

            if (motivo) {
                where.motivo = {
                    [Op.iLike]: `%${motivo}%`
                };
            }

            const reposicoes = await db.Reposicao.findAll({
                where
            });

            return reposicoes;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ReposicaoServices