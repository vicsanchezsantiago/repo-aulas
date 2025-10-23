/**
 * 1. Crie variáveis para saldo, depósito e saque.
 *    Realize operações de adição e subtração usando uma variável 'operacao'.
 *    Exiba o resultado final no console.
 */
let saldo = 2000
let deposito = 400
let saque = 100
let operacao = saldo + deposito - saque

console.log(operacao)

/**
 * 2. Crie uma variável numérica.
 *    Utilize o operador ternário para verificar se o número é par ou ímpar.
 *    Exiba o resultado no console.
 */
let num = 200
let par_impar = num%2 === 0 ? "par" : "ímpar"

console.log(par_impar)

/**
 * 3. Use variáveis booleanas para simular usuário logado e permissão de administrador.
 *    Utilize o operador AND para verificar se ambas as condições são verdadeiras.
 *    Exiba o resultado no console.
 */
let logado = true
let administrador = true

if(logado && administrador){
   console.log("logado!")
} else {
    console.log("não está logado/não é administrador.")
}


/**
 * 4. Declare duas variáveis booleanas.
 *    Utilize o operador OR para verificar se pelo menos uma delas é verdadeira.
 *    Exiba o resultado no console.
 */
let victor = true
let maior_idade = true

if(victor || maior_idade){
    console.log("oie")
}


/**
 * 5. Declare variáveis para idade mínima e idade do usuário.
 *    Utilize estruturas condicionais (if, else) para verificar se o usuário pode comprar o ingresso.
 */

let min = 18
let usuario = 17

if(usuario >= min){
    console.log("você pode comprar ingresso!")
} else {
    console.log("você não pode comprar ingresso.")
}