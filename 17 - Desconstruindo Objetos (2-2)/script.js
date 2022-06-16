let pessoa = {
    nome : 'Nathan',
    sobrenome : 'Parente',
    idade : 20,
    social: {
        facebook: 'nathanparente',
        instagram:{
            url: '@nvdesign.ofc',
            seguidores: 450,
        }
    },
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    }
};

//let {nome, sobrenome, social:{instagram:{url:instagram, seguidores}}} = pessoa;

let {nome, sobrenome, social:{instagram}} = pessoa;


console.log(nome, sobrenome, instagram)