//let d = new Date(); 

//console.log(d); //MOSTRA AS INFORMAÇÕES DA DATA DIA,MES,HORA, etc....

//console.log(d.toDateString()); //MOSTRA A DATA DE FORMA RESUMIDA

//console.log(d.toString()); //MOSTRA A DATA DE FORMA RESUMIDA

//console.log(d.toUTCString())//CONVERTE PARA O GMT TIRANDO O FUSO-HORÁRIO

//let d = new Date(2022, 5, 28, 14, 34, 27); // ANO, MÊS (no js 0 = Janeiro), Dia, Hora, Minutos, Segundos

// TAMBÉM TEM OUTRA FORMA QUE É ATRAVÉS DE UMA STRING

let d = new Date(); 

//let novoValor = d.getFullYear();//*PEGA SÓ O ANO EM VALORES NUMÉRICOS INTEIROS 

//let novoValor = d.getMonth();//*PEGA O MÊS (lembrando que Janeiro = 0)

//let novoValor = d.getDay();//*PEGA O DIA DA SEMANA (Semana começa no Domingo = 0)

//let novoValor = d.getDate(); //*PEFA O DIA ATUAL

//let novoValor = d.getHours();//* PEGA AS HORAS ATUAIS (SÓ A HORA)

//let novoValor = d.getMinutes(); //* PEGA OS MINUTOS

//let novoValor = d.getSeconds(); //* PEGA OS SEGUNDOS

//let novoValor = d.getMilliseconds(); //* PEGA OS MILISEGUNDOS

let novoValor = d.getTime(); //* PEGA OS MILISEGUNDOS ENTRE 1970 E ATÉ A DATA ATUAL

console.log(novoValor);
