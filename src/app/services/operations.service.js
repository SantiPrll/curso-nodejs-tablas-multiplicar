const fileService = require("./file.service");

const listarTabla = (base, limite = 10) => {
  const promise = new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor ingresadoÑ ${base} No es un número.`);
      return;
    }
    let data = "";
    for (let index = 1; index <= limite; index++) {
      data += `${base} * ${index} = ${base * index}\n`;
    }

    resolve(data);
  });

  return promise;
};

const crearTabla = (base, limite = 10) => {
  const promise = new Promise((resolve, reject) => {
    console.log(base,limite);
    listarTabla(base, limite)
      .then(data => {
        fileService
          .create(`../assets/tablas/table-${base}_to_${limite}.txt`, data)
          .then(() => resolve(`El archivo table-${base}_to_${limite}.txt ha sido creado`))
          .catch(error => reject(error));
      })
      .catch(error => reject(error));
  });

  return promise;
};

module.exports = {
  crearTabla,
  listarTabla
};
