
// For In mostra a key em um object:
/*
const pessoa = {
    nome: 'Flávia',
    idade: 40,
    cidade: 'Maringá'
}

for (let chave in pessoa) {
    console.log(chave)
    // Par acessar alguma propriedade?
    console.log(chave, pessoa['nome'])
}
*/

//For In mostra o index em um array:

const cores = ['vermelho', 'preto', 'azul', 'amarelo', 'verde', 'branco']

for (let indice in cores) {
    console.log(indice)
    //Para acessar as propriedades:
    console.log(indice, cores[indice])
}