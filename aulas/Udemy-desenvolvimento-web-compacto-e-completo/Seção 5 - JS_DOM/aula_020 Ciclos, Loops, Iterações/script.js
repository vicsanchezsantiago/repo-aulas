// CICLOS - LOOPS - ITERAÇÔES

//ciclo/loop são estruturas de código que executa até que uma condição seja alcançada.

// --------------------------------
// ciclo WHILE
// --------------------------------

    //  while(condição) {
    //      código a ser executado até a condição se tornar false
    //  }

// let valor = 0
// while(valor < 10){
//     console.log(valor)
//     valor++ 
// }
//é necessário manipular a variável para não se tornar um ciclo infinito.
//++ - operador de pós incremento


// --------------------------------
// ciclo DO... WHILE (faça enquanto) - o primeiro ciclo é sempre executado porque a condição é vista no fim.
// --------------------------------

// let valor = 0
// do {
//     console.log(valor)
//     valor++
// } while(valor < 10)

//executa o ciclo enquanto a condição for true
//a diferença é que o do while executa ao menos uma vez, mesmo que a condição seja false.

// --------------------------------
// ciclo FOR (para faça) - um dos mais utilizados
// --------------------------------
/* 
for(iniciação; condição; incremento){
    código a executar
}
*/

// for(let valor = 0; valor < 10; valor++){
//     console.log(valor)
// }

/*
for (início, cond, incremento){
    bloco executado
}
*/

// --------------------------------
// ciclo FOR...IN (não vai funcionar corretamente assim, porque apresenta as chaves)
// é mais funcional quando falarmos de objetos
// --------------------------------

// let valores = [1,2,3,4,5]
// for(valor in valores){
//     console.log(valor)
// }
//não funcioa corretamente com números pois o JS traduz os valores das chaves, e não dos elementos em si(é funcional mais para objetos).


// --------------------------------
// ciclo FOR...OF
// --------------------------------

// let nomes = ["joao", "ana", "carlos"]
// for(nome of nomes){
//     console.log(nome)
// }
//em cada ciclo é buscado o valor do elemento dentro do array.

// --------------------------------
// ciclo FOREACH (para cada)
// --------------------------------
// let nomes = ["joao", "ana", "carlos"]
// nomes.forEach((n) => console.log(n))

//forEach é uma função do array.
