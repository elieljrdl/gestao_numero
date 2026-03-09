const Services = require('./Services.js')
const { Op } = require('sequelize');
const db = require('../database/models');

class CelularServices extends Services {
    constructor() {
        super('Celular');
    }

    async getCelularFilters(numeroAp, modelo) {
        try {
            const where = {};

            if (numeroAp) {
                where.numero_identificador = {
                    [Op.iLike]: `%${numeroAp}%`
                };
            }

            if (modelo) {
                where.modelo = {
                    [Op.iLike]: `%${modelo}%`
                };
            }
            
            console.log(where);
            const celulares = await db.Celular.findAll({
                where
            });

            return celulares;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CelularServices