// 1 - Crie um arquivo chamado dados.json contendo informações fictícias em formato JSON. O arquivo pode representar, por exemplo, dados de produtos, usuários ou qualquer outra informação que você deseje.

// Exemplo:

// {
//     "produtos": [
//         {
//             "id": 1,
//             "nome": "Camiseta",
//             "preco": 25.99
//         },
//         {
//             "id": 2,
//             "nome": "Calça Jeans",
//             "preco": 49.99
//         }
//     ],
//     "usuarios": [
//         {
//             "id": 101,
//             "nome": "João",
//             "email": "joao@example.com"
//         },
//         {
//             "id": 102,
//             "nome": "Maria",
//             "email": "maria@example.com"
//         }
//     ]
// }
// Copiar código
// Crie um arquivo chamadoutilizarRequire.js e, dentro dele, utilize a função require() para importar o conteúdo do arquivo dados.json.
const dados = require('./1-dados.json')

// Imprima no console o conteúdo importado utilizando a função console.log().
console.log(dados)

// Acesse diferentes propriedades do objeto importado e imprima no console para verificar o acesso aos dados.
console.log(dados.produtos)
console.log(dados.produtos[0].nome)

// 2 - Crie um arquivo chamado dados2.json contendo informações em formato JSON. O arquivo pode representar, por exemplo, dados de produtos de uma loja ou qualquer outra informação que você deseje.

// Exemplo

// {
//     "produtos": [
//         {
//             "id": 1,
//             "nome": "Camiseta",
//             "preco": 25.99
//         },
//         {
//             "id": 2,
//             "nome": "Calça Jeans",
//             "preco": 49.99
//         }
//     ],
//     "usuarios": [
//         {
//             "id": 101,
//             "nome": "João",
//             "email": "joao@example.com"
//         },
//         {
//             "id": 102,
//             "nome": "Maria",
//             "email": "maria@example.com"
//         }
//     ]
// }
// Copiar código
// Em seguida, crie um arquivo chamado lerArquivoJson.js. Dentro dele, utilize o método require para importar o conteúdo do arquivo dados2.json.
const dados2 = require('./dados2.json');

// Imprima no console o objeto JavaScript resultante da leitura do arquivo.
console.log(dados2)

// 3 - Crie um objeto JavaScript representando informações de um produto. O objeto deve conter pelo menos as seguintes propriedades:

// id (number): identificador do produto.
// nome (string): nome do produto.
// preco (number): preço do produto.


// Copiar código
// Converta o objeto produto para uma string utilizando JSON.stringify() e imprima no console a string resultante.
const produto = {
    id: 1,
    nome: "Camiseta",
    preco: 25.99
}

console.log(JSON.stringify(produto,null,2))

// 4 - Crie um arquivo chamado animais.json, contendo informações fictícias em formato JSON. O arquivo pode representar dados de animais, incluindo pelo menos três elementos no array.

// Exemplo de animais.json:

// {
//     "animais": [
//         {
//             "id": 1,
//             "nome": "Leão",
//             "tipo": "Mamífero",
//             "habitat": "Savana"
//         },
//         {
//             "id": 2,
//             "nome": "Pinguim",
//             "tipo": "Ave",
//             "habitat": "Pólo Sul"
//         },
//         {
//             "id": 3,
//             "nome": "Cobra",
//             "tipo": "Réptil",
//             "habitat": "Floresta Tropical"
//         }
//     ]
// }
// Copiar código
// Crie um arquivo chamado manipulacaoJson.js. Dentro deste arquivo, realize as seguintes operações:

// a) Leia o conteúdo do arquivo animais.json.
const animais = JSON.stringify(require('./animais.json'),null, 2)
console.log(animais)

// b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().
animaisParse = JSON.parse(animais)
console.log(animaisParse)

// c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat.
animaisParse.animais.push({
    id: 4,
    nome: 'gatinho',
    tipo: 'felino?',
    habitat: 'meu quarto vei'
})

console.log(animaisParse)

// d) Modifique o habitat de um animal existente no array de animais.
animaisParse.animais[0].habitat = 'selvaa'
console.log(animaisParse)

// e) Remova um animal do array de animais.
animaisParse.animais.pop()
console.log(animaisParse)

// f) Converta o objeto modificado para uma string JSON utilizando JSON.stringify().
const modificado = JSON.stringify(animaisParse, null, 2) // 3º parâmetro ajuda na identação

// g) Imprima no console o objeto JavaScript resultante das operações.
console.log(modificado);


// 5 - Crie um objeto JavaScript representando informações de uma pessoa. O objeto deve conter as seguintes propriedades:

// id (number): identificador da pessoa.
// nome (string): nome da pessoa.
// idade (number): idade da pessoa

// Copiar código
// Crie uma função que receba um objeto JavaScript e retorne um novo objeto. Utilize esta função para fazer uma cópia do objeto pessoaOriginal.
const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
}

function novoObjeto (obj) {
    return {...obj}
}

novaPessoa = novoObjeto(pessoaOriginal)

// Modifique a cópia do objeto obtido através da função, adicionando ou alterando pelo menos uma propriedade.
Object.defineProperty(novaPessoa,'nome', {value: 'Victor'})

// Imprima no console ambos os objetos (o original e o modificado) para verificar que as alterações feitas no objeto modificado não afetaram o objeto original.
console.log(pessoaOriginal)
console.log(novaPessoa)