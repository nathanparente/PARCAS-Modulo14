let pessoa = {
    nome : 'Nathan',
    sobrenome : 'Parente',
    idade : 20,
    social: {
        facebook: 'nathanparente',
        instagram: 'nvdesign.ofc'
    },
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    }
};

let {nome, sobrenome, idade} = pessoa;

console.log(nome, sobrenome, idade)