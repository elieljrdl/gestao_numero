const { Router, application } = require('express');
const UsuarioController = require('../controllers/UsuarioController.js')
const authMiddleware = require('../middlewares/authMiddleware.js');

const router = Router();
const usuarioController = new UsuarioController();

router.get('/usuarios', authMiddleware, (req, res) => usuarioController.getAll(req, res));
router.get('/usuarios/:id', authMiddleware, (req, res) => usuarioController.getOneForId(req, res));
router.post('/usuarios', authMiddleware, (req, res) => usuarioController.createNew(req, res));
// router.put('/usuarios/:id', authMiddleware, (req, res) => usuarioController.atualization(req, res));

// Rotas para logar e criar usuários
router.post('/register', (req, res) => usuarioController.createNew(req, res));
router.post('/login', (req, res) => usuarioController.login(req, res));



module.exports = router;