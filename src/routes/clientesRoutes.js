const { Router } = require('express');
const ClienteController = require('../controllers/ClienteController.js');
const ConexaoController = require('../controllers/ConexaoController.js')

const clienteController = new ClienteController();
const conexaoController = new ConexaoController();

const router = Router();

router.get('/clientes', (req, res) => clienteController.getAll(req, res));
router.get('/clientes/:id', (req, res) => clienteController.getOneForId(req, res));
router.post('/clientes', (req, res) => clienteController.createNew(req, res));
router.put('/clientes/:id', (req, res) => clienteController.atualization(req, res));
router.delete('/clientes/:id', (req, res) => clienteController.reqDelete(req, res));

//rota para buscar conexoes por id de cliente
router.get('/clientes/:clienteId/conexoes', (req, res) => conexaoController.getConexaoForCliente(req, res));
// rota para criar conexao
router.post('/clientes/:clienteId/conexoes', (req, res) => conexaoController.createNew(req, res))

module.exports = router;