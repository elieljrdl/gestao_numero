import Operadora from "./Operadora.js";
import Numero from "./Numero.js";
import Status from "./Status.js";
import Cliente from "./Cliente.js";
import Conexao from "./Conexao.js"; 

Numero.belongsTo(Operadora);
Numero.belongsTo(Status);

Conexao.belongsTo(Cliente);
Conexao.belongsTo(Numero);

Operadora.hasMany(Numero);
Status.hasMany(Numero);

Cliente.hasMany(Conexao);
Numero.hasMany(Conexao);
export {
  Operadora,
  Numero,
  Status,
  Cliente,
  Conexao
};