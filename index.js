const chalk = require('chalk')
const fs = require('fs')

function allLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const resul = [];
    let i;

    while((i = regex.exec(texto)) !== null){
        resul.push({ [i[1]]: i[2] });
    }

    return resul.length === 0 ? "Não há links no texto" : resul;
}

function wrongType(err){
    throw new Error(chalk.red(err.code, 'nenhum arquivo selecionado'))
}

async function getFile(path){
    const encoding = 'utf-8'
    try {
        const text = await fs.promises.readFile(path, encoding)
        return allLinks(text)
    } catch (err){
        wrongType(err)
    } finally {
        console.log(chalk.yellow("Operação concluída"))
    }
}

module.exports = getFile;
