const Controller = require('./Controller.js');
const WhatsappServices = require('../services/WhatsappServices.js')

const whatsappServices = new WhatsappServices();

class WhatsappController extends Controller {
    constructor() {
        super(whatsappServices)
    }
}

module.exports = WhatsappController;