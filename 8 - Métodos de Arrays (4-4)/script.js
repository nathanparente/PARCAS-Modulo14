let lista = [45, 4, 9, 16, 25];
let lista2 = [];

/*
lista2 = lista.find(function(item){   //* encontra o item definido 
    return (item == 16)? true : false;
});
*/

lista2 = lista.findIndex(function(item){   //* encontra a posição do item definido 
    return (item == 25)? true : false;
});

console.log(res)