const chalk = require('chalk')
const fs = require('fs')

function wrongType(err){
    throw new Error(chalk.red(err.code, 'nenhum arquivo selecionado'))
}

async function getFile(path){
    const encoding = 'utf-8'    
    try {
        const text = await fs.promises.readFile(path, encoding)
        console.log(chalk.green(text))
    } catch (err){
        wrongType(err)
    }
}

console.log(getFile('./arquivos/texto1.md'))