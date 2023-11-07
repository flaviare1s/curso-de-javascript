// Receber uma quantidade de valores para avaliar
// Função exibe se cada valor é par ou ímpar
/*
exibirTipo(12)
function exibirTipo(limite) {
   for(let i = 0; i <= limite; i++) {
        if(i % 2 === 0) {
            console.log(i, 'PAR!') 
        } else {
            console.log(i, 'ÍMPAR!')
        }
    }
}
*/

function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++) {
        if (i === 0) {
            console.log(i, 'não é PAR nem ÍMPAR!')
        } else if (i % 2 === 0) {
            console.log(i,'é PAR!')
        } else {
            console.log(i, 'é ÍMPAR!')
        }
    }
}

exibirTipo(11)
  