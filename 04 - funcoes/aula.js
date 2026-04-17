function escreverNome(nome) {
    return ('Meu nome é ' + nome);
}

escreverNome('sara')

idade = 17;

function verificarIdade(idade) {
    if (idade < 18) {
        console.log(escreverNome('sara') + ' Não é maior de idade')
    } else {
        console.log('É maior de idade')
    }
}

verificarIdade(idade)