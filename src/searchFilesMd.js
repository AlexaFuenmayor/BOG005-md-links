const fs = require('fs');
const path = require('path');

const searchFilesMd = (userPath) =>{
    let arrayFile = [];

    if (fs.statSync(userPath).isFile() && path.extname(userPath) === '.md') {
        arrayFile.push(userPath)
        console.log('prueba array File:', arrayFile);
    }else if (fs.statSync(userPath).isFile() && path.extname(userPath) !== '.md'){
        console.log('Error, no es .md');
        return 'Error, no es .md'

    }else{
        fs.readdirSync(userPath).forEach(file =>{
            let newPath = path.join(userPath, file)
            if((fs.statSync(newPath).isDirectory())){
                arrayFile = arrayFile.concat(searchFilesMd(newPath))
            }else{
                if(path.extname(userPath) === '.md'){
                    arrayFile.push(newPath)
                }
            }
        })
    }

    return arrayFile
}

searchFilesMd()