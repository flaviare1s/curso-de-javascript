function verificar() {
    const listaConvidados = ['Flávia', 'Moysés', 'Sandra', 'Lívia', 'Georgia']
    const convidado = document.getElementById('nome').value

    if (listaConvidados.includes(convidado)) {
        document.getElementById('resultado').innerText = 'Você pode entrar!'
    } else {
        document.getElementById('resultado').innerText = 'Você não pode entrar!'
    }
}
