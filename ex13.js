// Criar um objeto postagem usando constructor function:

function Postagem(titulo, mensagem, autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizações = 0,
    this.comentários = [],
    this.estaAoVivo = false
}

const Postagem1 = new Postagem('Meu Blog', `Esta é uma postagem fantasia criada para o meu blog fantasia.`, 'Eu')

console.log(Postagem1)

