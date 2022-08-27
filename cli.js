const getFile = require('./index')
const chalk = require('chalk')

const path = process.argv

async function textProcess(data){
    const resul = await getFile(data[2])
    console.log(chalk.black.bgMagenta('Lista de links:'), resul )
}

textProcess(path)