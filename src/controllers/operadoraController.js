import { Operadora } from "../models/index.js";

class OperadoraController {
    
    static async listarOperadora (req, res) {
        try {
            const listaOperadoras = await Operadora.findAll();
            res.status(200).json(listaOperadoras);
        } catch (erro) {
            res.status(500).json({message: `Erro ao listar as Operadoras. Erro: ${erro}`})
        }
    }

    static async criarOperadora (req, res) {
        const novaOperadora = req.body
        try {
            const operadoraCriada = await Operadora.create(novaOperadora)
            res.status(201).json({message: `Operadora criada com sucesso ${novaOperadora}`});
        } catch (erro) {
            res.status(500).json({message: `Falha ao criar uma nova operadora ${erro}`})
        }
    }
}

export default OperadoraController