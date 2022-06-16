
let d = new Date(); 

//d.setFullYear(2022); //* Troco o ano
//d.getMonth(11); //* Troco o mês

d.setDate(d.getDate() + 3); //*PEGA O DIA E SOMA MAIS UMA QUANTIDADE ESCOLHIDA
let novoValor = d;

console.log(novoValor);
