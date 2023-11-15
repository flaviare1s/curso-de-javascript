const numeros = [1, 2, 3, 4, 5, 6, 7]

numeros.forEach((numero) => {console.log(numero)})

// Para mostrar o índice também:
numeros.forEach((numero, indice) => {console.log(numero, indice)})


// Usando for of:
/*
for (numero of numeros)
    console.log(numero)
*/


// Usando for in:
/*
for (numero in numeros)
    console.log(numeros[numero])
*/