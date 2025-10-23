/*
  Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada.
  Em seguida, chame a função e exiba a saudação no console.
*/
function exibeNome(nome) {
    return `Eai, ${nome}!`
}
console.log(exibeNome('Victor'))

/*
  Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18).
  Imprima o resultado no console.
*/
function maiorIdade(idade) {
    if (idade >= 18) {
        return "Você é maior de idade."
    } else {
        return "Você é menor de idade."
    }
}
console.log(maiorIdade(26))

/*
  Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse().
  Retorne true se for um palíndromo e false caso contrário.
  Imprima o resultado no console.
*/
function ehPalindromo(texto) {
    if (texto.split('').reverse().join('') == texto) { //split separa caracteres em array, reverse inverte a ordem do array e join reune td
        return true
    } else {
        return false
    }
}
console.log(ehPalindromo('arara'))

/*
  Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles.
  Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior.
  Imprima o maior valor no console.
*/
function qualEhMaior(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return `${num1} é o maior entre ${num1}, ${num2} e ${num3}.`
    } else if (num2 > num1 && num2 > num3) {
        return `${num2} é o maior entre ${num1}, ${num2} e ${num3}.`
    } else {
        return `${num3} é o maior entre ${num1}, ${num2} e ${num3}.`
    }
}
console.log(qualEhMaior(230,105,310))

/*
  Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente.
  A função deve calcular a potência da base elevada ao expoente e retornar o resultado.
*/
const calculaPotencia = (base,expoente) => base**expoente;
console.log(calculaPotencia(2,3))
