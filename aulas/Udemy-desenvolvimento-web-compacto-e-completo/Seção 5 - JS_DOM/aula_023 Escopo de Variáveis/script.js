// ESCOPO DE VARIÁVEIS

// -----------------------------
// exemplo 1
// -----------------------------
// let valor = 10
// console.log(valor)

// -----------------------------
// exemplo 2
// -----------------------------

// let valor = 10
// function escrever(){
//     console.log("função: " + valor)
// }
// escrever()
// //código executado dentro da função
// console.log(valor)
// //na prática, como a variavel foi definida fora da função, possui escopo global (reconhecida fora e dentro das estruturas).


// -----------------------------
// exemplo 3
// -----------------------------

// let valor = 10 // global scope
// function escrever(){
//     let valor = 100 // local scope - será usada ao apresentar função, mas só existe dentro dela - seu ciclo de vida termina ao fim do uso da função.
//     console.log("função: " + valor)
// }
// escrever()
// console.log(valor)

// -----------------------------
// exemplo 4
// -----------------------------

for(let i=1; i < 10; i++){
    console.log(i)
}

console.log(i)
//dará erro ao sair da função de ciclo for, pois o i não foi definido em escopo global, apenas local.
