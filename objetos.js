// NATUREZA DINÂMICA DE OBEJETOS:

const pessoa = {
    nome: 'Maria',
    idade: 21
}

// Adicionando propriedades:
pessoa.altura = 1.72

console.log(pessoa)

// Deletando propriedades:
delete pessoa.altura
console.log(pessoa)

// Clonando objetos:
const novoObjeto = Object.assign({},pessoa)
console.log(novoObjeto)

// Adicionando propriedades no objeto clonado:
const novoObjeto2 = Object.assign({
    altura: 1.72
},pessoa)
console.log(novoObjeto2)

// Outra forma de clonar:
const novoObjeto3 = {...pessoa}
console.log(novoObjeto3)
