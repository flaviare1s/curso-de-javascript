let endereco = {
    rua: 'Avenida da Abolição',
    cidade: 'Fortaleza',
    cep: 600000,
}

function exibirEndereço(endereco) {
    for (let chave in endereco)
        console.log(chave, endereco[chave])
}

exibirEndereço(endereco)