const {absolutePath,searchFilesMd, readAllFiles, validarHTTP} = require ('./readFiles');
const rootFile = process.argv[2];



function mdLinks (path, options= {validate:false}){
  return new Promise((resolve, reject) =>{

    //Flujo de funciones:
    const  pathAbsolute = absolutePath(path)
    //siguiente función creada:
    const arrayMds = searchFilesMd(pathAbsolute)
    const validate = validarHTTP(arrayMds)

    if(options.validate === true){
    readAllFiles(arrayMds).then(response => resolve(response))
    //leer todos los archivos, función asinc, (no se puede guardar dentro de una variable)

    }else{
      //la función que retorna: href, text, file.. pero ya no se resolvera como si la condición fuese true, el response será ahora el argumento de la función validar()
    readAllFiles(arrayMds).then(response => validarHTTP(response.flat())).then(resp => resolve(resp))

    }

  })
}
mdLinks(rootFile).then(res=>console.log(res))


