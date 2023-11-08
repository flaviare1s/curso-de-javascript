// Criar uma função para exibir os números primos
/*
function exibirNumerosPrimos(limite) {
    
    for (let numero = 2; numero <= limite; numero++) {
        let ehPrimo = true

        for (let divisor = 2; divisor < numero; divisor++) {
            if (numero % divisor === 0)
                ehPrimo = false
                break
        }
        if (ehPrimo) console.log(numero)
    }
}

exibirNumerosPrimos(20)
*/

// Uma maneira mais correta de se fazer, pois o código fica mais limpo:

function exibirNumerosPrimos(limite) {
    
    for (let numero = 2; numero <= limite; numero++) {   
        if (calcularPrimo(numero)) console.log(numero)
    }
}

function calcularPrimo(numero) {
    let ehPrimo = true
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            return false
        } 
    }
    return true
}
exibirNumerosPrimos(40)