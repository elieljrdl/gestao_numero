const Controller = require('./Controller.js');
const PerfilServices = require('../services/PerfilServices.js')

const perfilServices = new PerfilServices();

class PerfilController extends Controller {
    constructor() {
        super(perfilServices)
    }

    async getCelForPerfil(req, res) {
       const { idCelular } = req.params

       try {
        const listCelPerfil = await getCelPerfil(idCelular);
        res.status(200).json(listCelPerfil)
       } catch (erro) {
            res.status(500).json(erro)
       }
       
    }
}

module.exports = PerfilController;