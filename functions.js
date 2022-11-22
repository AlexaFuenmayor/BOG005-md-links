const fs = require("fs");
let path = require("path");
let process = require("process");
const rootFile = process.argv[2];
const marked = require("marked");
const axios = require("axios");

const checkPathExist = (userPath) => {
  const existPath = fs.existsSync(userPath);
  if (existPath) {
    return true;
  } else {
    console.log('Enter a path');
  }
};

checkPathExist(rootFile);

const absolutePath = (userPath) => {
  const pathAbsolute = path.isAbsolute(userPath);
  if (!pathAbsolute) {
    const pathRelative = path.resolve(userPath);
    return pathRelative;
  }
};
// console.log("absolute path is: ", absolutePath(rootFile));
const rutAbsolute = absolutePath(rootFile);

const searchFilesMd = (userPath) => {
  let arrayFileMd = [];
  if (path.extname(userPath) == "") {
    // console.log("debería ser directorio");
    let directory = [];
    directory = fs.readdirSync(userPath);

    directory.forEach((list) => {
      list = path.join(userPath, list);
      // console.log('cada ruta hija: ', list);

      if (path.extname(list) === "") {
        searchFilesMd(list);
      } else if (path.extname(list) == ".md") {
        arrayFileMd.push(list);

        // console.log('array file tiene la ruta del archivo md: ', arrayFileMd);
      }
    });
  } else if (path.extname(userPath) === ".md") {
    arrayFileMd.push(userPath);
    // let files = fs.readFileSync(userPath, 'UTF-8')
    // console.log('files content: ', files);

    // console.log('prueba array File DENTRO DEL ESLE: ', arrayFileMd);
  }

  return arrayFileMd;
};

const readFile = (fileMD) => {
  return new Promise((resolve, reject) => {
    let arrayFile = [];
    fs.readFile(fileMD, "UTF-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        let renderer = new marked.Renderer();

        renderer.link = function (href, file, text) {
          const aggObjet = {
            file: fileMD,
            href: href,
            text: text,
          };
          if (aggObjet.href.includes("http")) {
            arrayFile.push(aggObjet);
          }
        };
        marked.marked(data, { renderer: renderer });
        resolve(arrayFile);
      }
    });
  });
};


const readAllFiles = (arrayFiles) => {
  let promiseArr = [];
  promiseArr = arrayFiles.map((fileMD) => {
    return readFile(fileMD);
    // .then(res=>console.log('Ver cada archivo MD: ', res))
  });
  return Promise.all(promiseArr).then((res) => res);
};

// console.log('es sincrono o asincrono: ', readFiles(searchFilesMd(rootFile[2])));

// module.exports = absolutePath
const validarHTTP = (objetArray) => {
  let promiseArr = [];
  promiseArr = objetArray.map((objet) => {
    return axios.get(objet.href).then((res) => {
        objet.status = res.status;
        objet.message = "Ok";
        return objet;
    })
    .catch((err)=>{
      objet.status =  404;
      objet.message = 'Fail'
      return objet;
    })
  });
 return  Promise.all(promiseArr).then(res=> res)
};

// readAllFiles(searchFilesMd(rutAbsolute)).then(resAll => validarHTTP(resAll.flat())).then(res=>console.log('RESPUESTA:', res))
// validarHTTP()
module.exports = { absolutePath, searchFilesMd, readAllFiles, validarHTTP };
