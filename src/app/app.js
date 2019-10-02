const yargs = require("./config/yargs").yargs;
const colors = require("colors");
const operationService = require("./services/operations.service");

const { argv } = yargs;
const { base, limite } = argv;
const comando = argv._[0];

switch (comando) {
  case "crear":
    operationService
      .crearTabla(base, limite)
      .then(data => console.log(data))
      .catch(error => console.error(error));
    break;
  case "listar":
    operationService
      .listarTabla(base, limite)
      .then(data => {
        console.log('-------------------------'.green)
        console.log(`-----Tabla de ${base}.---`.green)
        console.log('-------------------------'.green)
        console.log(data);
      })
      .catch(error => console.error(error));
    break;
  default:
    break;
}
