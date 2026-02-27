const Services = require("./Services.js");
const db = require("../models");

class NumeroServices extends Services {
  constructor() {
    super("Numero");
  }

  // impedimos associação de um número a mais de um WhatsApp activo
  async createItem(bodyCreate) {
    const exists = await db.Numero.findOne({
      where: { whatsapp_id: bodyCreate.whatsapp_id },
    });
    if (exists) {
      const err = new Error("este whatsapp já está vinculado a outro numero");
      err.name = "BusinessRuleError";
      throw err;
    }
    return super.createItem(bodyCreate);
  }

  async updateItem(bodyUpdate, id) {
    if (bodyUpdate.whatsapp_id) {
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
