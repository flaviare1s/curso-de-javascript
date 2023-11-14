// Esvaziando um array:

let numeros = [9, 22, 67, 4, 81, 99, 200]
let outros = numeros

// Primeira maneira (aqui esvazia o array numeros, mas mantem o array outros):
/*
numeros = []
console.log(numeros)
console.log(outros)
*/

// Segunda maneira (a mais recomendadada):

numeros.length = 0
console.log(numeros)
console.log(outros)


// Terceira maneira:
/*
numeros.splice(0, numeros.length)
console.log(numeros)
console.log(outros)
*/

// Quarta maneira (não recomendada):
/*
while (numeros.length > 0) {
    numeros.pop()
}
console.log(numeros)
console.log(outros)
*/