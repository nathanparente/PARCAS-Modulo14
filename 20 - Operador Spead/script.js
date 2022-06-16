/*
let numeros = [1,2,3,4];

let outros = [...numeros, 5,6,7,8];

console.log(outros);
*/

/*
let info = {
    nome:'Nathan',
    idade: 20, 
    raça:'humano',
}

let novaInfo = {
    ...info,
    pais:'Brasil',
    cidade:'Camocim',
    estado:'Ceará',
}

console.log(novaInfo)

*/

function adicionarInfo(info){
    let novasInfo = {
        ...info,
        status:5,
        token: 'sdfdsd',
        data_cadastro: '23/08/2022',
    };

    return novasInfo;
};

console.log(adicionarInfo({nome:'Nathan', idade:'20 anos'}));