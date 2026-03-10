const Services = require("./Services.js");
const db = require("../database/models");

class WhatsappServices extends Services {
  constructor() {
    super("Whatsapp");
  }

  async getAllForDb(page, limit) {
    const offset = (page - 1) * limit;
    const resultado = await db[this.model].findAndCountAll({
      limit,
      offset,
      include: [
        {
          model: db.Numero,
          as: "Numeros",
        },
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
    });
    return {
      total: resultado.count,
      paginaAtual: page,
      totalPaginas: Math.ceil(resultado.count / limit),
      dados: resultado.rows,
    };
  }
}

module.exports = WhatsappServices;
