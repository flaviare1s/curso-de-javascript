// Tipos Primitivos de Valor
/*
let nome = 'Flávia'; // string literal
let idade = 40; // number literal
let estAprovado = true; // boolean
let sobrenome ; // undefined
let corSelecionada = null // null é usada para redefinir um valor
*/
// Tipos de Referência

// function
// array
// object

// if...else

let data = new Date()
let hora = data.getHours()

console.log(`São ${hora} horas.`)

if (hora > 6 && hora < 12) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde!')
} else if (hora >= 18 < 00) {
    console.log('Boa noite!')
} else {
    console.log('Boa madrugada!')
}
