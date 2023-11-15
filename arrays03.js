// Combinando e cortando arrays:

const primeiro = [1, 2, 3]
const segundo = [4, 5, 6]

// Combinando arrays:
const combinado = primeiro.concat(segundo)
console.log(combinado)

// Usando o operador SPREAD:
const combinado2 = [...primeiro,...segundo]
console.log(combinado2)

// Adicionando elementos nos arrays combinados com o SPREAD:
const combinado3 = [...primeiro, 'valorAdicionado',...segundo, 'outroValorAdicionado']
console.log(combinado3)

// Clonando arrays com o SPREAD:
const clonado = [...combinado3]
console.log(clonado)

// Dividindo arrays:
const dividido = combinado.slice(1, 4)
console.log(dividido)






