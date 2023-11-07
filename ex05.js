// Criar um método para ler propriedades de um objeto e
// Exibir somente as propriedades do tipo string que estão nesse objeto

/*
const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Sei lá',
    personagem: 'Thor'
}
exibirPropriedades(filme)
function exibirPropriedades(obj) {
    for(prop in obj)
        if(typeof obj[prop] === 'string')
            console.log(prop,obj[prop])
}
*/

const pessoa = {
    nome: 'Paulo',
    idade: 56,
    cidade: 'Curitiba',
    peso: 1.85
}

const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Sei lá',
    personagem: 'Thor'
}

function exibirValoresString(valor) {
    for (chave in valor)
        if ( typeof valor[chave] === 'string')
            console.log(chave,valor[chave])
}

exibirValoresString(filme)

exibirValoresString(pessoa)


