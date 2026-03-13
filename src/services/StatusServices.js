const Services = require('./Services.js')
const { Op } = require('sequelize');
const db = require('../database/models');

class StatusServices extends Services {
    constructor() {
        super('Status');
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

            const status = await db.Status.findAll({
                where
            });

            return status;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = StatusServices