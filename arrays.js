// ARRAYS:

let numeros = [1, 2, 3, 1]
// Adicionando elementos a um array:
// Adicionando elementos no início do array:
numeros.unshift(0)
console.log(numeros)
// Adicionando elementos no meio do array:
numeros.splice(1, 0, 'a')
console.log(numeros)
// Adicionando elementos no final do array:
numeros.push(4)
console.log(numeros)

// Encontrando elementos (tipos primitivos):
console.log(numeros.indexOf(2)) // Retorna o índice do elemento.
console.log(numeros.indexOf(7)) // OBS: Quando o elemento não está presente no array, ele retorna o valor -1.
console.log(numeros.lastIndexOf(1)) // Retorna o índice da última ocorrência do valor, caso o valor seja repetido.

console.log(numeros.includes(2)) // Retorna true se o valor estiver presente no array.
