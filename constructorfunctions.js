//Pascal Case (Upper Camel Case):
function Celular(marcaCelular, tamanhoTela, capacidadeBateria, preco) {
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.preco = preco,
    this.ligar = function() {
        console.log('Fazendo ligação.')
    }
}

const celular1 = new Celular('Motorola', 5.5, 5000, 1200)
console.log(celular1)