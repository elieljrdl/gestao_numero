const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController.js')
const authMiddleware = require('../middlewares/authMiddleware.js');

const router = Router();
const usuarioController = new UsuarioController();

// Rotas para logar e criar usuários
router.post('/login', (req, res) => usuarioController.login(req, res));
router.post('/register', authMiddleware, (req, res) => usuarioController.createNew(req, res));

router.get('/usuarios', authMiddleware, (req, res) => usuarioController.getAll(req, res));
router.get('/usuarios/:id', authMiddleware, (req, res) => usuarioController.getOneForId(req, res));
router.delete('/usuarios/:id', authMiddleware, (req, res) => usuarioController.reqDelete(req, res));
// router.put('/usuarios/:id', authMiddleware, (req, res) => usuarioController.atualization(req, res));





module.exports = router;