const Services = require("./Services.js");
const db = require("../database/models");

class NumeroServices extends Services {
  constructor() {
    super("Numero");
  }

  async getAllForDb(page, limit) {
    const offset = (page - 1) * limit;
    const resultado = await db[this.model].findAndCountAll({
      limit,
      offset,
      include: [
        {
          model: db.Whatsapp,
          as: "Whatsapp",
          include: [
            {
              model: db.Perfil,
              as: "Perfil",
              include: [
                {
                  model: db.Celular,
                  as: "Celular",
                },
              ],
            },
            {
              model: db.Conexao,
              as: "Conexao",
              include: [
                {
                  model: db.Cliente,
                  as: "Cliente",
                },
              ],
            },
          ],
        },
      ],
    });

    return {
      total: resultado.count,
      paginaAtual: page,
      totalPaginas: Math.ceil(resultado.count / limit),
      dados: resultado.rows,
    };
  }
  // impedimos associação de um número a mais de um WhatsApp activo
  async createItem(bodyCreate) {
    if (
      bodyCreate.whatsapp_id !== null &&
      bodyCreate.whatsapp_id !== undefined
    ) {
      const exists = await db.Numero.findOne({
        where: { whatsapp_id: bodyCreate.whatsapp_id },
      });

      if (exists) {
        const err = new Error("este whatsapp já está vinculado a outro numero");
        err.name = "BusinessRuleError";
        throw err;
      }
    }

    return super.createItem(bodyCreate);
  }

  async updateItem(bodyUpdate, id) {
    if (
      bodyUpdate.whatsapp_id !== null &&
      bodyUpdate.whatsapp_id !== undefined
    ) {
      const conflict = await db.Numero.findOne({
        where: {
          whatsapp_id: bodyUpdate.whatsapp_id,
          id: { [db.Sequelize.Op.ne]: id },
        },
      });
      if (conflict) {
        const err = new Error("este whatsapp já está vinculado a outro numero");
        err.name = "BusinessRuleError";
        throw err;
      }
    }
    return super.updateItem(bodyUpdate, id);
  }
}

module.exports = NumeroServices;
