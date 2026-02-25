const { Router } = require('express');
const NumeroController = require('../controllers/NumeroController.js');

const numeroController = new NumeroController();
const router = Router();

router.get('/numeros', (req, res) => numeroController.getAll(req, res));
router.get('/numeros/:id', (req, res) => numeroController.getOneForId(req, res));
router.post('/numeros', (req, res) => numeroController.createNew(req, res));
router.put('/numeros/:id', (req, res) => numeroController.atualization(req, res));
router.delete('/numeros/:id', (req, res) => numeroController.reqDelete(req, res));

module.exports = router;