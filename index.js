const chalk = require('chalk')
const fs = require('fs')

function wrongType(err){
    throw new Error(chalk.red(err.code, 'nenhum arquivo selecionado'))
}

function getFile(path){
    const encoding = 'utf-8'
    fs.promises
        .readFile(path, encoding)
        .then((text) => console.log(chalk.green(text)))
        .catch((err) => wrongType(err))
}
console.log(getFile('./arquivos/texto1.md'))