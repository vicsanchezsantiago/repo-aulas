// FUNCTION EXPRESSIONS

// function escrever1(){
//     console.log("Olá Mundo")
// }
// //função normal

// let escrever2 = function(){
//     console.log("Olá Mundo")
// }
// //function expression: função atribuída a uma variável.

// escrever1()
// escrever2()

// ----------------------------
// evocar corretamente a função
// ----------------------------

// funcao() // não vai funcionar, pois chamei a função antes dela ser decladara.
// let funcao = function(){
//     console.log("Texto da função")
// }
// funcao()


// ----------------------------
// arrow function - introduzidas com o ES6 - sintaxe mais reduzida
// ----------------------------

//permite criar uma função de forma mais limpa

// let funcao1 = function(){
//     console.log("funcao 1")
// }
// //function expression

// let funcao2 = () => {
//     console.log("funcao 2")
// }
// // => - arrow function (se comporta da mesma forma da function expression)

// //estrutura de uma arrow function
// let nome_da_funcao = () => {
//     console.log('bloco de codigo')
// }

// funcao1()
// funcao2()
// nome_da_funcao()

// ----------------------------
// arrow functions com parâmetros
// ----------------------------

let funcao = (a,b) => {
    return a + b
}

console.log(funcao(10,20))

// ou ainda mais simples...

let adicao = (a,b) => a + b
console.log(adicao(100,200))
//return é feito automático em => 

let escrever = mensagem => console.log(mensagem)
//quando só tenho um argumento, não é necessário inseri-lo em parênteses.
escrever("Arrow function!")
escrever("JavaScript é fantástico")

