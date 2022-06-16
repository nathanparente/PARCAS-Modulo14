/*
function adicionarInfo(numeros){ //*Sem o operador rest o parâmetro mostra só o primeiro item
    console.log(numeros)
}

adicionarInfo(1,2,3,4,5,6)
*/

/*
function adicionarInfo(...numeros){ //*COM o operador rest o parâmetro mostra todos os items em forma de Array
    console.log(numeros)
}

adicionarInfo(1,2,3,4,5,6)
*/

/*
function adicionarInfo(...numeros){ //*COM o operador rest o parâmetro mostra todos os items em forma de Array
    console.log(numeros)
}

adicionarInfo("Nathan", "Bianca", "Pedro", "João")
*/


function adicionar(nomes, ...novosNomes){
    let novoConjunto = [
        ...nomes,
        ...novosNomes,
    ];

    return novoConjunto;

}

let nomes = ['Nathan', 'Pedro'];
let outros = adicionar(nomes, 'Bianca', 'Maria','Luiza');

console.log(outros);

