// ARRAYS
let nomes = ["joao", "ana", "carlos", "xavier", "catarina", "fernanda"]

// -------------------------------
// ordenar um array de forma ascendente - IMPORTANTE: altera a estrutura do array
// -------------------------------

// nomes.sort()
// //função .sort ordena/organiza em ordem ascendente/alfabética. Altera definitivamente a estrutura do array.
// console.table(nomes)

// -------------------------------
// ordenar um array de forma descendente
// -------------------------------

// nomes.sort()
// nomes.reverse()
// //função .reverse inverte a ordem do array. Permite assim organizar em ordem decrescente, pois o JS não possui função nativa para isso.
// console.table(nomes)

// -------------------------------
// sintaxe alternativa
// -------------------------------

// nomes.sort().reverse()
// //é possível unir funções.
// console.table(nomes)

// -------------------------------
// ou ainda
// -------------------------------

// console.table(nomes.sort().reverse())
// //é possível executar direto em uma única linha

// -------------------------------
// também funciona para arrays numéricos, mas ...
// -------------------------------

// let valores = [1,30,20,50,56,45]
// valores.sort()
// //se houver valores numéricos, .sort organiza como se fossem strings.
// console.table(valores)
// valores.reverse()
// console.table(valores)

// let valores = [1,30,20,100,50,56,45]
// valores.sort()
// console.table(valores)
// valores.reverse()
// console.table(valores)

// Existem formas de fazer a ordenação correta, mas envolvem funções.