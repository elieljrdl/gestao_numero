const Services = require("./Services.js");
const { Op } = require('sequelize');
const db = require("../database/models");

class NumeroServices extends Services {
  constructor() {
    super("Numero");
  }

  async getFiltersService(filters, page = 1, limit = 10) {
    const { numero, status, cliente_nome, conexao_nome } = filters;
    try {
      const offset = (page - 1) * limit;
      const where = {};

      if (numero) {
        where.numero = {
          [Op.iLike]: `%${numero}%`
        };
      }

      if (status) {
        where.status = {
          [Op.iLike]: `%${status}%`
        };
      }

      // Include de Whatsapp com Perfil/Celular e Conexao/Cliente
      const whatsappInclude = {
        model: db.Whatsapp,
        as: "Whatsapp",
        include: [
          {
            model: db.Perfil,
            as: "Perfil",
            include: [
              {
                model: db.Celular,
                as: "Celular"
              }
            ]
          },
          {
            model: db.Conexao,
            as: "Conexao",
            include: [
              {
                model: db.Cliente,
                as: "Cliente"
              }
            ]
          }
        ]
      };

      // Aplicar filtros se necessário
      if (cliente_nome || conexao_nome) {
        whatsappInclude.required = true;

        if (cliente_nome) {
          const clienteInclude = whatsappInclude.include.find(inc => inc.as === "Conexao");
          if (clienteInclude) {
            clienteInclude.include[0].where = {
              nome: {
                [Op.iLike]: `%${cliente_nome}%`
              }
            };
            clienteInclude.include[0].required = true;
          }
        }

        if (conexao_nome) {
          whatsappInclude.include.push({
            model: db.Conexao,
            as: "Conexao",
            where: {
              nome: {
                [Op.iLike]: `%${conexao_nome}%`
              }
            },
            required: true,
            duplicating: false
          });
        }
      }

      const options = { where, subQuery: false, distinct: true, limit, offset, include: [whatsappInclude] };

      const resultado = await db.Numero.findAndCountAll(options);
      return {
        total: resultado.count,
        paginaAtual: page,
        totalPaginas: Math.ceil(resultado.count / limit),
        dados: resultado.rows
      };
    } catch (error) {
      throw error;
    }
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
