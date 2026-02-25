const { Router } = require('express');
const WhatsappController = require('../controllers/WhatsappController.js');

const whatsappController = new WhatsappController();
const router = Router();

router.get('/whatsapps', (req, res) => whatsappController.getAll(req, res));
router.get('/whatsapps/:id', (req, res) => whatsappController.getOneForId(req, res));
router.post('/whatsapps', (req, res) => whatsappController.createNew(req, res));
router.put('/whatsapps/:id', (req, res) => whatsappController.atualization(req, res));
router.delete('/whatsapps/:id', (req, res) => whatsappController.reqDelete(req, res));

module.exports = router;