const Services = require('./Services.js')
const db = require('../models')

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
}

module.exports = PerfilServices