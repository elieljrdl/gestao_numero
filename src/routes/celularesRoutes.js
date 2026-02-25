const { Router } = require('express');
const CelularController = require('../controllers/CelularController.js');
const PerfilController = require('../controllers/PerfilController.js');

const celularController = new CelularController();
const perfilController = new PerfilController();

const router = Router();

router.get('/celulares', (req, res) => celularController.getAll(req, res));
router.get('/celulares/:id', (req, res) => celularController.getOneForId(req, res));
router.post('/celulares', (req, res) => celularController.createNew(req, res));
router.put('/celulares/:id', (req, res) => celularController.atualization(req, res));
router.delete('/celulares/:id', (req, res) => celularController.reqDelete(req, res));

// rota para buscar celular por perfil
router.get('/celulares/:idCelular/perfil', (req, res) => perfilController.getCelForPerfil(req, res));
// rota para criar perfil do celular
router.post('/celulares/:idCelular/perfil', (req, res) => perfilController.createNew(req, res));


module.exports = router;