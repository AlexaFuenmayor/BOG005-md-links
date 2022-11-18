
// const absolutePath = require ('./readFiles.js')

// const fs = require("fs");
// let path = require("path");
// let process = require("process");
// const rootFile = process.argv[2];


// const searchFilesMd = (userPath) => {
//     let arrayFileMd = [];
//     if (path.extname(userPath) == "") {
//       // console.log("debería ser directorio");
//       let directory = [];
//       directory = fs.readdirSync(userPath);
//       // console.log("Directory contiene: ", directory);
//       // let files = fs.readFileSync(userPath + "/" + directory[0], "UTF-8");
//       // console.log("files content: ", files);
//       // console.log("elem hijos: ", directory);
//       directory.forEach((list) => {
//         list = path.join(userPath, list);
//         // console.log('cada ruta hija: ', list);
  
//         if (path.extname(list) === "") {
//           searchFilesMd(list);
//         } else if (path.extname(list) == ".md") {
//           arrayFileMd.push(list);
  
//           // console.log('array file tiene la ruta del archivo md: ', arrayFileMd);
//         }
//       });
//     } else if (path.extname(userPath) === ".md") {
//       arrayFileMd.push(userPath);
//       // let files = fs.readFileSync(userPath, 'UTF-8')
//       // console.log('files content: ', files);
  
//       // console.log('prueba array File: ', arrayFileMd);
//     }
  
//     return arrayFileMd;
//   };

//   searchFilesMd(absolutePath(rootFile))

//   module.exports = searchFilesMd