// ARRAYS:
// Adicionando elementos a um array:
let numeros = [1, 2, 3]

// Adicionando elementos no início do array:
numeros.unshift(0)
console.log(numeros)

// Adicionando elementos no meio do array:
numeros.splice(1, 0, 'a')
console.log(numeros)

// Adicionando elementos no final do array:
numeros.push(4)
console.log(numeros)