// ARRAYS (possui índice de base 0)
let nomes = ["joao", "ana", "carlos"]

// -------------------------------
// alterar dados de um array 
// -------------------------------
// nomes[1] = "maria"
// console.table(nomes)

// -------------------------------
// quantos elementos tem um array
// -------------------------------
// console.log(nomes.length)
// métodos/funções = executa determinadas ações em um array. Não contém parênteses
// propriedades = busca informações sobre algum array. Contém parênteses

// .length é uma propriedade que busca comprimento/qtd que existe em um elemento.

// -------------------------------
// adicionar mais elementos no final do array
// -------------------------------

// nomes.push("joaquim")
// //função .push adiciona mais elementos ao final do array.

// console.table(nomes)

// -------------------------------
// adicionar elementos no início do array
// -------------------------------

// nomes.unshift("josé")
// //função .unshift adiciona elementos no início do array
// console.table(nomes)

// -------------------------------
// remover elemento do início
// -------------------------------

// nomes.shift()
// //função .shift remove o primeiro elemento de um array
// console.table(nomes)

// -------------------------------
// remover elemento do fim
// -------------------------------

// nomes.pop()
// //função .pop remove o último elemento de um array
// console.table(nomes)

// -------------------------------
// remover elementos permite guardar o valor removido numa variável
// -------------------------------

// let removido = nomes.pop()
// //repassa a função para uma variável, armazenando-a.
// console.log(removido)
// console.table(nomes)

// -------------------------------
// remover e/ou adicionar elementos em qualquer posição dentro do array
// -------------------------------

// console.table(nomes)
// nomes.splice(1,2,"joaquim", "manuel", "rui")
// //função .splice indica que, a partir de qual índice eu quero começar a fazer uma remoção, depois quantos elementos eu quero remover (nesse caso, queremos remover 2 a partir do 1, e depois adicionar mais 3 apresentados em strings)
// console.table(nomes)


// -------------------------------
// ver eliminados
// -------------------------------

// console.table(nomes)
// let eliminados = nomes.splice(1,2,"joaquim", "manuel", "rui")
// //é possível guardar em variáveis a remoção por .splice
// console.table(nomes)
// console.table(eliminados)
