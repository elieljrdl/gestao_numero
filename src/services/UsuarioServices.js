const Services = require('./Services.js')
const { Op } = require('sequelize');
const db = require('../database/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UsuarioServices extends Services {
    constructor() {
        super("Usuario")
    }

    async getFiltersService(filters) {
        const { nome, email } = filters;
        try {
            const where = {};

            if (nome) {
                where.nome = {
                    [Op.iLike]: `%${nome}%`
                };
            }

            if (email) {
                where.email = {
                    [Op.iLike]: `%${email}%`
                };
            }

            const usuarios = await db.Usuario.findAll({
                where
            });

            return usuarios;
        } catch (error) {
            throw error;
        }
    }

    async createItem({nome, email, senha, isAdmin}) {
        
        const existingUser = await db.Usuario.findOne({ where: { email } });
        if (existingUser) {
            const err = new Error("Email já registrado");
            err.name = "BusinessRuleError";
            throw err;
        }

        const hashedPassword = await bcrypt.hash(senha, 10);

        const newUser = await db.Usuario.create({
            nome,
            email,
            senha: hashedPassword,
            isAdmin
        });
        
        return newUser;
    }

    async loginUser({ email, senha }) {
        const user = await db.Usuario.findOne({ where: { email } });
        if (!user) {
            const err = new Error("Email ou senha inválidos");
            err.name = "AuthenticationError";
            throw err;
        }

        const passwordMatch = await bcrypt.compare(senha, user.senha);
        if (!passwordMatch) {
            const err = new Error("Email ou senha inválidos");
            err.name = "AuthenticationError";
            throw err;
        }

        const token = jwt.sign({
            id: user.id,
            email: user.email,
            nome: user.nome,
            isAdmin: user.isAdmin
        }, process.env.JWT_SECRET, { expiresIn: '1d' });

        return token;
    }
}

module.exports = UsuarioServices;