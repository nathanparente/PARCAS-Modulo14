let nome = 'Nathan Vieira Parente';

//SABER QUANTOS CARACTERES TEM EM UMA STRING

//console.log(nome.length);

//console.log(nome.indexOf('Parente')); //TODO pode procurar letra, número, espaço

//TAMBÉM É POSSÍVEL COLOCAR DENTRO DE UM IF 

let resultado = '';

if(nome.indexOf('Saponaro') > -1){
    resultado = 'Achou';
} else {
    resultado = 'Não achou';
}

console.log(resultado);