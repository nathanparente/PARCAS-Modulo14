let lista = [45, 4, 9, 16, 25];
let lista2 = [];

/*
lista2 = lista.map(function(item){ //*a função map mapeia o array e executa uma função em cada item do array
    return item *2;
})
*/

/*
lista2 = lista.filter(function(item){ //* o filtro roda uma função que retorna true ou false 
    if (item < 20){
        return true;
    } else {
        return false;
    }
})
*/

/*
lista2 = lista.every(function(item){ //* todo mundo tem que estar de acordo com a função (every)
    if(item > 20){
        return true;
    } else {
        return false;
    }
});
*/

/*
lista2 = lista.some(function(item){ //* alguns tem que estar de acordo com a função (every)
    if(item > 20){
        return true;
    } else {
        return false;
    }
});
*/

lista2 = lista.every(function(item){
    return(item > 3)? true : false;
});
let res = lista2;

console.log(res)