const getFile = require('./index')
const chalk = require('chalk')
const validaURL = require('./http-validar')

const path = process.argv

async function textProcess(path){
    const resul = await getFile(path[2])
    if(path[3] === 'validar'){
        console.log(chalk.blue('links validados'), await validaURL(resul))
    }else{
        console.log(chalk.black.bgMagenta('Lista de links:'), resul )
    }
}

textProcess(path)
