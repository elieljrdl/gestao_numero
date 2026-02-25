class Controller {
    constructor(entidadeService) {
        this.entidadeService = entidadeService
    }

    async getAll(req, res) {
        const { page = 1, limit = 10 } = req.query;
        try {
            const listItens = await this.entidadeService.getAllForDb(
                Number(page),
                Number(limit)
            )
            return res.status(200).json(listItens)
        } catch (erro) {
            res.status(500).json(erro)
        }
    };

    async getOneForId(req, res) {
        const { id } = req.params
        try {
            const oneItem = await this.entidadeService.getOneItemForId(id);
            return res.status(200).json(oneItem)
        } catch (erro) {
            res.status(500).json(erro)
        }
    }

    async createNew (req, res) {
        const itemForCreate = req.body

        try {
            const newCreated = await this.entidadeService.createItem(itemForCreate)
            return res.status(201).json(newCreated)
        } catch (erro) {
            res.status(500).json(erro)
        }
    }

    async atualization(req, res) {
        const { id } = req.params;
        const dataUpdate = req.body;

        try {
            const isUpdate = await this.entidadeService.updateItem(dataUpdate, id);

            if (!isUpdate) {
                return res.status(400).json({mensagem: 'registro não foi atualizado'})
            }
            return res.status(200).json({mensagem: `O registro foi atualizado com sucesso`})
        } catch (erro) {
            res.status(500).json(erro)
        }
    }

    async reqDelete(req, res) {
        const { id } = req.params

        try {
            await this.entidadeService.deleteItem(id)
            return res.status(200).json({mensagem: `id ${id} deletado com sucesso`})
        } catch (erro) {
            res.status(500).json(erro)
        }
    }
}

module.exports = Controller;