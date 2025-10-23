// 1 - Crie um array de objetos JavaScript representando informações de livros. Cada objeto deve conter pelo menos as seguintes propriedades:

// id (number): identificador do livro.
// titulo (string): título do livro.
// autor (string): nome do autor.
// anoPublicacao (number): ano de publicação do livro.
// Exemplo

// const biblioteca = [
//     { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954 },
//     { id: 2, titulo: "Dom Quixote", autor: "Miguel de Cervantes", anoPublicacao: 1605 },
//     { id: 3, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 }
// ]
// Copiar código
// Crie uma função chamada encontrarLivroPorId que receba o id de um livro como parâmetro e retorne o objeto do livro correspondente. Se nenhum livro for encontrado, a função deve retornar null.
const biblioteca = [
    { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954 },
    { id: 2, titulo: "Dom Quixote", autor: "Miguel de Cervantes", anoPublicacao: 1605 },
    { id: 3, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 }
]

function encontrarLivroPorId(lista, propriedade) {
    const consulta = lista.find((livro) => { return livro.id === propriedade }) //filter retorna array vazio, find retorna nada
    return consulta || null

}

console.log(encontrarLivroPorId(biblioteca, 20))

// Utilize a função para encontrar um livro com um id existente e imprima no console as informações do livro encontrado. Em seguida, utilize a função para encontrar um livro com um id inexistente e imprima no console uma mensagem indicando que o livro não foi encontrado.
console.log(encontrarLivroPorId(biblioteca, 2))
const consulta = encontrarLivroPorId(biblioteca, 20)
if (consulta === null) { console.log('Livro não encontrado.') }

// 2 - Crie um array de objetos JavaScript representando informações de filmes. Cada objeto deve conter pelo menos as seguintes propriedades:

// id (number): identificador do filme.
// titulo (string): título do filme.
// diretor (string): nome do diretor.
// anoLancamento (number): ano de lançamento do filme.
// Exemplo

// const catalogoFilmes = [
//     { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
//     { id: 2, titulo: "Jurassic Park", diretor: "Steven Spielberg", anoLancamento: 1993 },
//     { id: 3, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 }
// ]
// Copiar código
// Crie uma função chamada filtrarFilmesPorAno que receba um ano como parâmetro e retorne um novo array contendo apenas os filmes lançados nesse ano.
const catalogoFilmes = [
    { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
    { id: 2, titulo: "Jurassic Park", diretor: "Steven Spielberg", anoLancamento: 1993 },
    { id: 3, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 },
    { id: 4, titulo: "Inception 2", diretor: "Christopher Nolan", anoLancamento: 2010 }
]

function filtrarFilmesPorAno(lista, ano) {
    return lista.filter(filme => { return filme.anoLancamento === ano });

}

// Utilize a função para filtrar os filmes lançados em um ano específico e imprima no console o array resultante. Em seguida, refaça a operação com outro ano.
console.log(filtrarFilmesPorAno(catalogoFilmes, 2010))

// 3 - Crie um array de objetos JavaScript representando informações fictícias de produtos. Cada objeto deve conter pelo menos as seguintes propriedades:

// id (number): identificador do produto.
// nome (string): nome do produto.
// preco (number): preço do produto.
// Exemplo

// const listaProdutos = [
//     { id: 1, nome: "Camiseta", preco: 25.99 },
//     { id: 2, nome: "Calça Jeans", preco: 49.99 },
//     { id: 3, nome: "Tênis", preco: 79.99 },
//     { id: 4, nome: "Boné", preco: 15.99 }
// ]
// Copiar código
// Crie uma função chamada filtrarOrdenarProdutosPorPreco que recebe um valor máximo (maxPreco) como parâmetro e retorna um novo array contendo apenas os produtos cujo preço é menor ou igual ao valor máximo, ordenados em ordem crescente de preço.
const listaProdutos = [
    { id: 1, nome: "Camiseta", preco: 25.99 },
    { id: 2, nome: "Calça Jeans", preco: 49.99 },
    { id: 3, nome: "Tênis", preco: 79.99 },
    { id: 4, nome: "Boné", preco: 15.99 }
]

function filtrarOrdenarProdutosPorPreco(lista, maxPreco) {
    return lista
        .filter((produto) => { return produto.preco <= maxPreco })
        .sort((a, b) => { return a.preco - b.preco })
}

// Utilize a função para filtrar e ordenar os produtos com um valor máximo específico e imprima no console o array resultante.
console.log(filtrarOrdenarProdutosPorPreco(listaProdutos, 49.99))

// 4 - Crie um array de objetos JavaScript representando informações de animais. Cada objeto deve conter pelo menos as seguintes propriedades:

// id (number): identificador do animal.
// nome (string): nome do animal.
// especie (string): espécie do animal.
// idade (number): idade do animal.
// Exemplo

// const animais = [
//     { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
//     { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
//     { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
// ]
// Copiar código
// Crie uma função chamada ordenarAnimais que receba como parâmetro uma função de comparação para realizar a ordenação do array.

// Exemplo

// function ordenarAnimais(comparacao) {
//     return animais.sort(comparacao);
// }
// Copiar código
// Você pode criar funções para fazer a ordenação crescente ou decrescente:

// function compararIdadeCrescente(a, b) {
//     // implementação
// }

// function compararIdadeDecrescente(a, b) {
//     // implementação
// }
// Copiar código

const animais = [
    { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
    { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
    { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
]

function ordenarAnimais(lista, propriedade, cresente = true) {
    const fator = (cresente ? 1 : -1)
    return lista.sort((a, b) => {
        return ((a[propriedade] - b[propriedade]) * fator)
    });
}

console.log(ordenarAnimais(animais, 'idade', false))
//criei uma função só, com um parametro para ordenar crescente ou decrescente

// 5 - Crie um array de objetos JavaScript representando informações fictícias de departamentos. Cada objeto deve conter pelo menos as seguintes propriedades:

// id (number): identificador do departamento.
// nome (string): nome do departamento.
// funcionarios (array): array de objetos representando funcionários do departamento.
// Exemplo

// const departamentos = [
//     {
//         id: 1,
//         nome: "Vendas",
//         funcionarios: [
//             { id: 101, nome: "Ana", cargo: "Vendedor" },
//             { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
//         ]
//     },
//     {
//         id: 2,
//         nome: "TI",
//         funcionarios: [
//             { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
//             { id: 202, nome: "João", cargo: "Analista de sistemas" }
//         ]
//     }
// ]
// Copiar código
// Crie uma função chamada encontrarFuncionarioPorId que recebe o id de um funcionário e retorna o objeto do funcionário correspondente em qualquer departamento.
const departamentos = [
    {
        id: 1,
        nome: "Vendas",
        funcionarios: [
            { id: 101, nome: "Ana", cargo: "Vendedor" },
            { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
        ]
    },
    {
        id: 2,
        nome: "TI",
        funcionarios: [
            { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
            { id: 202, nome: "João", cargo: "Analista de sistemas" }
        ]
    }
]

function encontrarFuncionarioPorId(lista, id) {
    // for (const departamento of lista) {
    //     const funcionario = departamento.funcionarios.find(f => f.id === id)
    //     if (funcionario) {
    //         return funcionario
    //     }
    // }
    // return "Funcionário não encontrado."
    const todosFuncionarios = lista.flatMap(dep => dep.funcionarios)
    return (todosFuncionarios.find(func => func.id === id)) || "Funcionário não encontrado."
}

// Utilize a função para encontrar um funcionário com um id existente e imprima no console as informações do funcionário encontrado. Em seguida, utilize a função para encontrar um funcionário com um id inexistente e imprima no console uma mensagem indicando que o funcionário não foi encontrado.

console.log(encontrarFuncionarioPorId(departamentos, 201))
console.log(encontrarFuncionarioPorId(departamentos, 21))

