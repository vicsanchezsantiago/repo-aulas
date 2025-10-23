// 1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.
// Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo, por exemplo function funcaoExemplo(...params).
function unirArrays (...arrays){
    return arrays.flat()
}

console.log(unirArrays([1,2,3,4],[2,22,222,2],[2,35,6,7]))

// 2 - Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.
const numeros = [12,3,2,5,6]

const somaTotal = numeros.reduce((acc,atual, ) => acc + atual, 0)

console.log(somaTotal)

// 3 - Considere duas listas de cores:
// const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']
// const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']
// Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

const listaUnida = [...coresLista1,...coresLista2]
const listaFinal = [...new Set (listaUnida)]

console.log(listaFinal)

// 4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

function apenasPares (numeros){
    return numeros.filter(numero => numero %2 === 0)
}

console.log(apenasPares([2,3,4,5,6,7,8]))

// 5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.
function multiplosEmaiores (arraydenum){
return arraydenum.filter(numero => numero % 3 === 0 && numero > 5)
}

console.log(multiplosEmaiores([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]))
// 6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.

function somarTudo (array){
    return array.reduce((acc, elemento) => acc + elemento, 0);
}

console.log(somarTudo([2,3,4,5,6,7,8]))