const Services = require('./Services.js')
const { Op } = require('sequelize');
const db = require('../database/models');

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

    async getFiltersService(filters) {
        const { nome } = filters;
        try {
            const where = {};

            if (nome) {
                where.nome = {
                    [Op.iLike]: `%${nome}%`
                };
            }

            const conexoes = await db.Conexao.findAll({
                where
            });

            return conexoes;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ConexaoServices