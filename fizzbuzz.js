// Divisível por 3 => Fizz
// Divisível por 5 => Buzz
// Divisível por 3 ou 5 => FizzBuzz
// Não divisível por 3 ou 5 => entrada
// Não for um número => não é um número

/*
let resultado = fizzBuzz(10);
console.log(resultado);


function fizzBuzz(entrada) {
if (typeof entrada !== 'number')
    return 'Não é um número'
if (entrada % 3 === 0 && entrada % 5 === 0)
    return 'FizzBuzz'
if (entrada % 3 === 0)
    return 'Fizz'
if (entrada % 5 === 0)
    return 'Buzz'
return entrada
}
*/

let resultado = fizzBuzz(30)
console.log(resultado)


function fizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        return 'FizzBuzz'
    } else if (n % 3 === 0) {
        return 'Fizz'
    } else if (n % 5 === 0) {
        return 'Buzz'
    } else if (typeof n !== 'number') {
        return 'Não é um número!'
    } else {
        return n
    }
}