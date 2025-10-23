// Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
const array1 = [1, 2, 3, 4, 5]

for (elemento of array1) {
    console.log(elemento)
}

// Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
const array2 = [1, 2, 3, 4, 5]

function imprimirArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`Índice ${i}: ${array[i]}`)
    }
}

imprimirArray(array2)

// Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
const array3 = [1, 2, 3, 4, 5]

function somaElementos(array) {
    let soma = 0
    for (let i = 0; i < array.length; i++) {
        soma += array[i]
    }
    return soma
}

console.log(`A soma dos números é ${somaElementos(array3)}.`)

// Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.
function maiorEMenor(array) {
    let menor = array[0]
    let maior = array[0]
    for (let i = 0; i < array.length; i++) {

        if (array[i] < menor) {
            menor = array[i]
        }
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
    }
    return [menor, maior]
}

const array4 = [10, 2, 3, 4, 5, 39, 1]
let resultado = maiorEMenor(array4)
console.log(`O menor número é ${resultado[0]} e o maior número é ${resultado[1]}`)

// Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]
let pares = []

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        pares.push(numeros[i])
    }
}

console.log(`Números pares: ${pares}.`)

// Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.
const numeros2 = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]
let soma2 = 0;

for (let i = 0; i < numeros2.length; i++) {
    soma2 += numeros2[i]
}

let media = soma2 / numeros2.length

console.log(`A média dos números é ${media.toFixed(2)}`)


//

// 1. Verificação de Presença e Índice:
// Crie uma função que recebe um array de nomes e um nome para procurar. A função deve retornar um objeto com as seguintes propriedades:
// presente: true se o nome estiver no array, false caso contrário.
// indice: o índice da primeira ocorrência do nome no array (ou -1 se não estiver presente).
function procurarNomes(array, nome) {

    for (i = 0; i < array.length; i++) {
        if (array[i] === nome) {
            return {
                presente: true,
                indice: i
            }
        }
    }

    return {
        presente: false,
        indice: -1
    }
}

const nomes = ['ana', 'bea', 'clau', 'dino', 'vic']
console.log(procurarNomes(nomes, 'vic'))

// 2. Soma de Números Pares com Desestruturação:
// Você recebe um array com pares de números: [[1, 2], [3, 4], [5, 6]]. Use desestruturação e um loop for...of para calcular a soma de todos os números pares do array.

// 3. Criando um Objeto a partir de Dois Arrays:
// Você tem dois arrays: nomes = ["Alice", "Bob", "Carol"] e idades = [25, 30, 28]. Crie uma função que utilize esses arrays para criar um objeto onde as chaves são os nomes e os valores são as idades correspondentes (ex: { "Alice": 25, "Bob": 30, "Carol": 28 }).

// 4. Filtrando Números em um Intervalo:
// Crie uma função que recebe um array de números e dois números min e max. A função deve retornar um novo array contendo apenas os números do array original que estão dentro do intervalo fechado [min, max] (inclusive min e max). Use o método filter ou um loop for clássico.

// 5. Buscando Substrings:
// Crie uma função que recebe um array de strings e uma substring para procurar. A função deve retornar um novo array contendo apenas as strings do array original que contêm a substring. Use o método includes dentro de um loop ou o método filter.
