// Exercício Nota Escolar
// Obter a média a partir de um array

// 0 - 59: E
// 60 a 69: D
// 70 - 79: C
// 80 a 89: B
// 90 a 100: A

const array = [100, 80, 90]

function mediaDoAluno(notas) {
    let soma = 0
    for (let nota of notas) {
        soma += nota
    }
    const media = soma / (notas.length)

    if (media <= 59) return 'E'
    if (media <= 69) return 'D'
    if (media <= 79) return 'C'
    if (media <= 89) return 'B'
    return 'A'  
}

console.log(mediaDoAluno(array))


