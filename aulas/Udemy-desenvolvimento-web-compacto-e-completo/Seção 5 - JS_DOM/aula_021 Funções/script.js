// FUNCTIONS - grupo de declarações que executam tarefas específicas (proporciona uma forma de criar pacote de códigos reutilizáveis)
//reduzem a repetição de código, fácil de manter e corrigir.

//ESTRUTURA-BASE
/* 
    function nome_da_funcao(){
        código executado dentro da função
    }
*/

// ------------------------------
// exemplo 1
// ------------------------------

// function escrever(){
//     console.log('Aqui está a frase da função.')
// }
// //o bloco será executado ao chamarmos o nome da função().
// escrever()

// ------------------------------
// exemplo 2 - parâmetros
// ------------------------------

// function escrever(mensagem){
//     console.log(mensagem)
// }
// //podemos criar funções para parâmetros e inserir valores posteriormente.
// escrever("Olá Mundo!")
// escrever("As funções são fáceis de criar")

// ------------------------------
// exemplo 3 - parâmetros e retorno
// ------------------------------

// function adicionar(a, b){
//     return a + b
// }

// let resultado = adicionar(100, 200)
// console.log("Resultado: " + resultado)
// //return é um retorno/devolução da execução de uma função.

// ------------------------------
// exemplo 4 - parâmetros com valor padrão (default values)
// ------------------------------

//aqui o sinal de atribuição atribui valor padrão a um parâmetro
function saudacao(mensagem = "Bom dia"){
    console.log(mensagem)
}

saudacao()
saudacao("Boa noite")
//aqui houve a substituição do valor atribuído anteriormente.