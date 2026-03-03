const Controller = require('./Controller.js')
const UsuarioServices = require('../services/UsuarioServices.js')

const usuarioServices = new UsuarioServices();

class UsuarioController extends Controller {
    constructor() {
        super(usuarioServices)
    }

    createNew(req, res) {
        const { nome, email, senha, isAdmin } = req.body;
         try {
            if (!nome || !email || !senha) {
                return res.status(400).json({ error: 'Nome, email e senha são obrigatórios.' });
            }

            const newUser = usuarioServices.createItem({ nome, email, senha, isAdmin });
            return res.status(201).json(newUser);
         } catch (error) {
            return res.status(401).json({ error: 'Erro ao criar usuário.', details: error.message});
         }
    }

    async login(req, res) {
        const  {email, senha } = req.body;  
        try {
            const token = await usuarioServices.loginUser({ email, senha });

            return res.json({message: 'Login realizado com sucesso!', token});
        } catch (error) {
            return res.status(401).json({ error: 'Erro ao realizar login.', details: error.message });
        }
    }
}

module.exports = UsuarioController;

