// 1 - Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.
const meuArray = ['a', 'b', 'c', 'd', 'e'];

meuArray.forEach((elemento, i, a) => {
  console.log(`Índice: ${i}, Valor: ${elemento}, Array: ${a}`);
});

// 2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.

function executaOperacaoEmArray(array, funcao) {
  array.forEach(funcao)
}

function somar5(elemento) {
  console.log(`${elemento} + 5 = ${elemento + 5}`)
}

const conjunto = [1, 2, 3, 4, 5]

executaOperacaoEmArray(conjunto, somar5)

// 3 - Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".
const numericos = [1, 3, 5, 7, 9]
let numero = 9

numericos.includes(numero) ? console.log(numericos.indexOf(numero)) : console.log(-1)



// 4 - Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.

// Copiar código
// Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.

const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);
let entrada = 'Anaaa'
const procurar = todasAsTurmas.find(nome => nome == entrada)

if (procurar){
  console.log(`Aluno encontrado: ${entrada}`)
} else {
  console.log('Aluno não encontrado')
}


// 5 - Considere um array de números inteiros.
// Copiar código
// Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.

const numeros = [6, 9, 12, 15, 18, 21];
numeros.forEach(num => console.log(`${num} x 3 = ${num * 3}`))

const ind = numeros.findIndex(numero => numero == 18)
console.log(ind)