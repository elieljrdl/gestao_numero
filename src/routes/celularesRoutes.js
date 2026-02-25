const { Router } = require('express');
const CelularController = require('../controllers/CelularController.js');

const celularController = new CelularController();
const router = Router();

router.get('/celulares', (req, res) => celularController.getAll(req, res));
router.get('/celulares/:id', (req, res) => celularController.getOneForId(req, res));
router.post('/celulares', (req, res) => celularController.createNew(req, res));
router.put('/celulares/:id', (req, res) => celularController.atualization(req, res));
router.delete('/celulares/:id', (req, res) => celularController.reqDelete(req, res));

module.exports = router;