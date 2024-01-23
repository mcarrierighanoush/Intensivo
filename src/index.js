import fs from 'fs';
import chalk from 'chalk';

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}));
    return resultados. length !== 0 ? resultados : "não há links disponiveis";
}

function trataErro(erro){
    console.log (erro);
    throw new Error(chalk.red(erro.code,'não a arquivo!'));
}
async function pega(caminhoDoArquivo){
    try{
        const enconding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, enconding) 
        return extraiLinks(texto);
    }  catch (erro)  {
        trataErro(erro);
    }
}

export default pega;




