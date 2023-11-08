// Criar uma função que exibe a quantidade de asteriscos que aquela linha possui

function exibirAsteriscos(linhas) {
    let padrao = ''
    for (let linha = 1; linha <= linhas; linha++) {
        padrao +='*'
        console.log(padrao)
    }
}
exibirAsteriscos(10)