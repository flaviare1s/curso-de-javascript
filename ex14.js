// Exercício de Faixa de Preço


// Primeira Opção:
let faixas = [
    {tooltip: 'até R$700', mínimo: 0, máximo: 700},
    {tooltip: 'até R$1000', mínimo: 700, máximo: 1000},
    {tooltip: 'acima de R$1000', mínimo: 1000, máximo: 999999},
]

console.log(faixas)


// Segunda Opção (Factory Function):

function criarFaixaPreco(tooltip, mínimo, máximo) {
   return {
    tooltip,
    mínimo,
    máximo
   }   
}

let faixas2 = [
    criarFaixaPreco('até R$700', 0, 700),
    criarFaixaPreco('até R$1000', 700, 1000),
    criarFaixaPreco('acima de R$1000', 1000, 999999)
]

console.log(faixas2)

// Terceira Opção (Constructor Factory):

function Faixa(tooltip, mínimo, máximo) {
    this.tooltip = tooltip,
    this. mínimo = mínimo,
    this.máximo = máximo
}

let faixa3 = [
    new Faixa('até R$700', 0, 700),
    new Faixa('até R$1000', 700, 1000),
    new Faixa('acima de R$1000', 1000, 999999)
]

console.log(faixa3)