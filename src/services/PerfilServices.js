const Services = require('./Services.js')
const { Op } = require('sequelize');
const db = require('../database/models');

class PerfilServices extends Services {
    constructor() {
        super('Perfil');
    }

    async getCelPerfil(idCel) {
        return db.Perfil.findAll({
            where: {
                celular_id: idCel
            }
        })
    }

    async getFiltersService(filters) {
        const { perfil } = filters;
        try {
            const where = {};

            if (perfil) {
                where.perfil = {
                    [Op.iLike]: `%${perfil}%`
                };
            }

            const perfis = await db.Perfil.findAll({
                where
            });

            return perfis;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = PerfilServices