// Velocidade máxima de 70km/h
// A cada 5 km/h acima do limite de velocidade ganha 1 ponto na carteira
// Match.floor()
// Caso pontor for maior do que 12, a carteira de habilitção é suspensa

/*
verificarVelocidade(89)

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70
    const pontoPorKm = 5
    if(velocidade <= velocidadeMaxima) {
        console.log(`OK`)
    } else {
        let pontos = ((velocidade - velocidadeMaxima) / pontoPorKm);
        if(pontos >= 12) {
            console.log('Carteira suspensa!!')
        } else {
            console.log(`Você acumulou ${Math.floor(pontos)} pontos.`)
        }
    }
}
*/

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70
    const pontoPorKm = 5

    if (velocidade <= velocidadeMaxima) {
        console.log(`Parabéns! Você está dentro do limite de velocidade permitido!`)
    } else {
        let pontos = (velocidade - velocidadeMaxima) / pontoPorKm
        if (pontos >= 12) {
            console.log(`Sua carteira de habilitação está suspensa!!!`)
        } else {
            console.log(`Você ultrapassou o limite de velocidade e acumulou ${Math.floor(pontos)} pontos na carteira!`)
        }
    }
}

verificarVelocidade(70)


