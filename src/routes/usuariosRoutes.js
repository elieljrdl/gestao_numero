const { Router, application } = require('express');
const UsuarioController = require('../controllers/UsuarioController.js')

const router = Router();
const usuarioController = new UsuarioController();

router.post('/register', (req, res) => usuarioController.createNew(req, res));
router.post('/login', (req, res) => usuarioController.login(req, res));

module.exports = router;