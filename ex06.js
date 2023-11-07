// Exibir uma função que retorna a soma de todos os múltiplos de 3 e de 5 dentro de um limite 

function somaMultiplos3e5(limite) {
    let multiplosDe3 = 0
    let multiplosDe5 = 0


    for (let i = 0; i <= limite; i++) {
        if (i % 3 === 0)
        multiplosDe3 += i
        if (i % 5 === 0)
        multiplosDe5 += i
    }

    console.log(multiplosDe3 + multiplosDe5)
}
somaMultiplos3e5(20)