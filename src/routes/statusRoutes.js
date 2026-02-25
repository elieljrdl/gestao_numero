const { Router } = require('express');
const StatusController = require('../controllers/StatusController.js');

const statusController = new StatusController();
const router = Router();

router.get('/status', (req, res) => statusController.getAll(req, res));
router.get('/status/:id', (req, res) => statusController.getOneForId(req, res));
router.post('/status', (req, res) => statusController.createNew(req, res));
router.put('/status/:id', (req, res) => statusController.atualization(req, res));
router.delete('/status/:id', (req, res) => statusController.reqDelete(req, res));

module.exports = router;