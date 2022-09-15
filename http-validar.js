const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function erros(erro){
    throw new Error(erro.message);
}

async function verificaStatus(links){
   try{
       const arrayStatus = Promise
           .all(links
               .map( async url => {
                   const res =  await fetch(url);
                   return `${res.status} - ${res.statusText}`
               }))
       return arrayStatus;
   } catch (error){
       erros(error);
   }
}

function gerarArrayObjetos(links){
   return links
       .map( objectLinks => Object
           .values(objectLinks).join());
}

async function validarURL(arrayLinks){
   const links = gerarArrayObjetos(arrayLinks);
   const statusLinks = await verificaStatus(links);
   const resul = arrayLinks.map( (objeto, indice) => ({
        ...objeto,
        status: statusLinks[indice]
    }))
    return resul;
}

module.exports = validarURL;
