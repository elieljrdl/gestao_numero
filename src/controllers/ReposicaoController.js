const Controller = require('./Controller.js');
const ReposicaoServices = require('../services/ReposicaoServices.js')

const reposicaoServices = new ReposicaoServices();

class ReposicaoController extends Controller {
    constructor() {
        super(reposicaoServices)
    }
}

module.exports = ReposicaoController;