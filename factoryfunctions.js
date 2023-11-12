function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria, preco) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        preco,
        ligar() {
            console.log('Fazendo ligação.')
        }
    }
}

const celular1 = criarCelular('Motorola', 5.5, 5000, 1200)
console.log(celular1)

const celular2 = criarCelular('Asus', 6, 5000, 1500)
console.log(celular1)