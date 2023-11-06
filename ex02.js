// Escreva uma função que usa dois números e retorna o maior entre eles:

/*
let valorMaior = max(11,9);
console.log(valorMaior)

function max(n1, n2) {
    if(n1 > n2)
        return n1;
    else return n2
}
*/

// Outra maneira de fazer:
/*
let valorMaior = max(11,9);
console.log(valorMaior)

function max(n1, n2) {
    return n1 > n2 ? n1: n2;
}
*/

let maiorNumero = valorMaior(30, 40)
console.log(maiorNumero)

function valorMaior(n1, n2) {
    if (n1 > n2) {
        return n1
    } else if (n2 > n1) {
        return n2
    } else {
        return 'Os valores digitados são iguais'
    }
}

