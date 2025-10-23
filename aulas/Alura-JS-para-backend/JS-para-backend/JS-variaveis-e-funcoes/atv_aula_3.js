/*
  Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.
*/
const frase = "Oi eu sou o victor egea duque sánchez santiago santos"
console.log(frase.length)

/*
  Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.
*/
let indef;
const vazio = null;

console.log(indef)
console.log(vazio)

/*
  Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.
*/
const nome = 'victor'
const idade = 26
const formado = true

console.log(`Meu nome é ${nome}, tenho ${idade} anos e é ${formado} que estou formado.`)

/*
  Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.
*/
let num = 26
let str = '23'

console.log(typeof String(num))
console.log(typeof Number(str))


/*
  Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.
*/
let frasefinal = "Hoje o dia está muito quente, 32 graus aff"

console.log(frasefinal.toUpperCase())
console.log(frasefinal.toLowerCase())
console.log(frasefinal.slice(0,28))