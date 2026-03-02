const { Router } = require('express');
const ReposicaoController = require('../controllers/ReposicaoController.js');
const authMiddleware = require('../middlewares/authMiddleware.js');

const reposicaoController = new ReposicaoController();
const router = Router();
router.use(authMiddleware)
router.get('/reposicao', (req, res) => reposicaoController.getAll(req, res));
router.get('/reposicao/:id', (req, res) => reposicaoController.getOneForId(req, res));
router.post('/reposicao', (req, res) => reposicaoController.createNew(req, res));
router.put('/reposicao/:id', (req, res) => reposicaoController.atualization(req, res));
// router.delete('/reposicao/:id', (req, res) => reposicaoController.reqDelete(req, res));

module.exports = router;