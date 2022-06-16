let telefone = "9";

//console.log(telefone.padEnd(9, '*'))// *PREENCHE DEPOIS DA STRING

//console.log(telefone.padStart(9, '*'))// *PREENCHE ANTES DA STRING

let cartao = "0111 2222 3333 4567"

let lastDigits = cartao.slice(-4);

let cartaoMascarado = lastDigits.padStart(14, '*')

console.log ('Este é o seu cartão? '+ cartaoMascarado);