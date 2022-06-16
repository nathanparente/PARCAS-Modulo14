//let novoValor = Math.round(3.67);// ARREDONDA PRA CIMA OU PRA BAIXO DEPENDENDO DA DECIMAL

//let novoValor = Math.floor(3.99);//FORÇA O NÚMERO A ARREDONDAR PRA BAIXO

//let novoValor = Math.ceil(3.1);//FORÇA O NÚMERO A ARREDONDAR PRA CIMA

//let novoValor = Math.abs(-8.75346);//RETORNA O NÚMERO POSITIVO (ABSOLUTO)

//let novoValor = Math.min(5, 8);//RETORNA O MENOR NÚMERO

//let novoValor = Math.max(5, 8);//RETORNA O MAIOR NÚMERO


function gerar (){
    let novoValor = Math.floor(Math.random( ) * 200)
    document.querySelector("#numero").innerHTML = novoValor;
}

//let novoValor = Math.floor(Math.random() * 20);//RETORNA UM NÚMERO ALEATÓRIO E SE MULTIPLICADO POR UM VALOR ELE LIMITA


