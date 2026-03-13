const Services = require("./Services.js");
const { Op } = require('sequelize');
const db = require("../database/models");

class WhatsappServices extends Services {
  constructor() {
    super("Whatsapp");
  }

  async getFiltersService(filters, page = 1, limit = 10) {
    const { observacao, tipo, cliente_nome, conexao_nome } = filters;
    try {
      const offset = (page - 1) * limit;
      const where = {};
      const include = [];

      if (observacao) {
        where.observacao = {
          [Op.iLike]: `%${observacao}%`
        };
      }

      if (tipo) {
        where.tipo = {
          [Op.iLike]: `%${tipo}%`
        };
      }

      // Include de Numeros
      include.push({
        model: db.Numero,
        as: "Numeros"
      });

      // Include de Perfil com Celular
      include.push({
        model: db.Perfil,
        as: "Perfil",
        include: [
          {
            model: db.Celular,
            as: "Celular"
          }
        ]
      });

      // Include de Conexao com Cliente (com filtro se necessário)
      const conexaoInclude = {
        model: db.Conexao,
        as: "Conexao",
        include: [
          {
            model: db.Cliente,
            as: "Cliente"
          }
        ]
      };

      if (conexao_nome) {
        conexaoInclude.where = {
          nome: {
            [Op.iLike]: `%${conexao_nome}%`
          }
        };
        conexaoInclude.required = true;
      }
      include.push(conexaoInclude);

      // Include de Cliente (com filtro se necessário)
      const clienteInclude = {
        model: db.Cliente,
        as: "Cliente"
      };

      if (cliente_nome) {
        clienteInclude.where = {
          nome: {
            [Op.iLike]: `%${cliente_nome}%`
          }
        };
        clienteInclude.required = true;
      }
      include.push(clienteInclude);

      const options = { where, subQuery: false, distinct: true, limit, offset, include };
      console.log(options);

      const resultado = await db.Whatsapp.findAndCountAll(options);
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
