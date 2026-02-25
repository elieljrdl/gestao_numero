const Controller = require('./Controller.js');
const StatusServices = require('../services/StatusServices.js')

const statusServices = new StatusServices();

class StatusController extends Controller {
    constructor() {
        super(statusServices)
    }
}

module.exports = StatusController;