const {
  absolutePath,
  searchFilesMd,
  readAllFiles,
  validarHTTP,
} = require("./functions");
const rootFile = process.argv[2];

function mdLinks(path, options = { validate: false }) {
  return new Promise((resolve, reject) => {
    //Flujo de funciones:
    const pathAbsolute = absolutePath(path);
    const arrayMds = searchFilesMd(pathAbsolute);
    if (options.validate === !true) {
      readAllFiles(arrayMds).then((response) => resolve(response.flat()));
    } else {
      readAllFiles(arrayMds)
        .then((response) => validarHTTP(response.flat()))
        .then((resp) => resolve(resp.flat()));
    }
  });
}
mdLinks(rootFile)
  .then((res) => console.log(res))
  .catch((err) => err);

module.exports = { mdLinks };
