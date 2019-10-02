const yargs = require("yargs");

const optionsDefault = {
  base: {
    demand: true,
    alias: "b"
  },
  limite: {
    alias: "l",
    default: 10
  }
};

yargs
  .command(
    "listar",
    "Imprime en consola la tabla de multiplicar.",
    optionsDefault
  )
  .command(
    "crear",
    "Genera un archivo con tabla de multiplicar.",
    optionsDefault
  )
  .help().argv;

module.exports = {
  yargs
};
