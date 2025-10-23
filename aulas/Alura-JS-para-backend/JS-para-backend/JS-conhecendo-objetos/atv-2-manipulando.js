// 1 - Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente informações sobre uma pessoa. Este objeto deve ter as seguintes propriedades:

// nome (string): Nome da pessoa.
// idade (number): Idade da pessoa.
// solteiro (boolean): Indicador de estado civil (true se solteiro, false se casado).
// hobbies (array): Lista de hobbies da pessoa.
// Adicione valores a cada propriedade do objeto pessoa. Use valores fictícios para simular uma pessoa específica.

// Crie uma função chamada mostrarInfoPessoa que aceite o objeto pessoa como parâmetro e imprima todas as informações da pessoa no console, incluindo o tipo de dado de cada propriedade.

// No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa passando o objeto pessoa como argumento.

// Dica: você pode usar um método de array para retirar os elementos dos colchetes e exibi-los como texto.
const pessoa1 = {
    nome: 'Victor',
    idade: 26,
    solteiro: true,
    hobbies: ['ver séries/filmes', 'assistir vídeos de ciência', 'exercitar', 'fazer receitas']
}

function mostrarInfoPessoa(pessoa) {
    return `
    Nome: ${pessoa.nome} (${typeof (pessoa.nome)}),
    Idade: ${pessoa.idade} (${typeof (pessoa.idade)}),
    Solteiro: ${pessoa.solteiro} (${typeof (pessoa.solteiro)}),
    Hobbies: ${pessoa.hobbies.join(', ')} (${typeof (pessoa.hobbies)})`
}

console.log(mostrarInfoPessoa(pessoa1))

// 2 - Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades:

// rua (string): nome da rua.
// cidade (string): nome da cidade.
// estado (string): nome do estado.
// Preencha as subpropriedades do objeto endereco com valores fictícios.

// Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.

// No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, incluindo o endereço, são exibidas corretamente no console.
const pessoa2 = {
    nome: 'Victor',
    idade: 26,
    solteiro: true,
    hobbies: ['ver séries/filmes', 'assistir vídeos de ciência', 'exercitar', 'fazer receitas']
}

pessoa2.endereco = {
    rua: 'R da silva',
    cidade: 'Ferraz city',
    estado: 'São Paulo'
}

function mostrarInfoPessoa2(pessoa) {
    return `
    Nome: ${pessoa.nome} (${typeof (pessoa.nome)}),
    Idade: ${pessoa.idade} (${typeof (pessoa.idade)}),
    Solteiro: ${pessoa.solteiro} (${typeof (pessoa.solteiro)}),
    Hobbies: ${pessoa.hobbies.join(', ')} (${typeof (pessoa.hobbies)}),
    Endereço: ${pessoa.endereco.rua} (${typeof (pessoa.endereco.rua)}), ${pessoa.endereco.cidade} (${typeof (pessoa.endereco.cidade)}) - ${pessoa.endereco.estado} (${typeof (pessoa.endereco.estado)})`
}

console.log(mostrarInfoPessoa2(pessoa2))

// 3 - Crie uma lista de pessoas chamada pessoas que será um array contendo objetos. Cada objeto deve representar uma pessoa e conter as seguintes propriedades:

// nome (string): nome da pessoa.
// idade (number): idade da pessoa.
// cidade (string): cidade de residência da pessoa.
// Adicione pelo menos três objetos à lista pessoas com informações fictícias de diferentes pessoas.
const pessoas = [
    {
        nome: 'Maria juana',
        idade: 24,
        cidade: 'Paris'
    },
    {
        nome: 'Paulo joão',
        idade: 30,
        cidade: 'Mogi'
    },
    {
        nome: 'Pedro henrique',
        idade: 40,
        cidade: 'Chicago'
    }
]


// a) Crie uma função chamada mostrarListaPessoas que aceita a lista pessoas como parâmetro e imprima no console as informações de cada pessoa na lista. 
function mostrarListaPessoas(lista) {
    for (const pessoa of lista) {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade} anos, Cidade: ${pessoa.cidade}`)
    }
}

mostrarListaPessoas(pessoas)

// b) Adicione uma nova pessoa à lista pessoas utilizando o método push. Certifique-se de que a nova pessoa tenha informações distintas das pessoas já existentes na lista.
pessoas.push({
    nome: 'vitoria batista',
    idade: 4,
    cidade: 'Suzano'
})

// c) Chame a função mostrarListaPessoas para verificar se as informações, incluindo a nova pessoa, são exibidas corretamente no console.
mostrarListaPessoas(pessoas)

// d) Crie uma função chamada filtrarPorCidade que aceita a lista pessoas e uma string cidade como parâmetros. A função deve retornar uma nova lista contendo apenas as pessoas que residem na cidade fornecida.

// Chame a função filtrarPorCidade passando a lista pessoas e uma cidade fictícia como argumentos e imprima no console o resultado obtido.
function filtrarPorCidade(lista, cidade) {
    return lista.filter(pessoa => pessoa.cidade === cidade)
}

console.log(filtrarPorCidade(pessoas, 'Suzano'))

// 4 - Crie um objeto chamado calculadora que terá os seguintes métodos:

// soma: uma função que aceita dois parâmetros e retorna a soma deles.
// subtracao: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro.
// multiplicacao: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles.
// divisao: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo. Certifique-se de tratar a divisão por zero, retornando uma mensagem apropriada nesse caso.

const calculadora = {
    soma: function somar(primeiroNum, segundoNum) {
        return primeiroNum + segundoNum;
    },
    subtracao: function subtrair(primeiroNum, segundoNum) {
        return primeiroNum - segundoNum;
    },
    multiplicacao: function multiplicar(primeiroNum, segundoNum) {
        return primeiroNum * segundoNum;
    },
    divisao: function dividir(primeiroNum, segundoNum) {
        return (primeiroNum === 0 || segundoNum === 0) ? console.log('Não é possível dividir por zero.') : primeiroNum / segundoNum;
    }
}

// a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os resultados obtidos.
console.log(calculadora.soma(1, 2))
console.log(calculadora.subtracao(1, 2))
console.log(calculadora.multiplicacao(1, 2))
console.log(calculadora.divisao(1, 2))

// b) Adicione um novo método chamado calcularMedia ao objeto calculadora. Esta função deve aceitar um array de números como parâmetro e retornar a média aritmética dos valores.
calculadora.media = function calcularMedia(array) {
    let soma = 0
    for (elemento of array) {
        soma += elemento
    }
    return soma / array.length
}

// c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido.
console.log(calculadora.media([10, 20, 30]))


// 5 - Crie um objeto chamado contaBancaria com as seguintes propriedades:

// titular: uma string representando o titular da conta.
// saldo: um número representando o saldo da conta.
// depositar: uma função que aceita um valor como parâmetro e adiciona esse valor ao saldo da conta. Utilize this para acessar a propriedade saldo.
// sacar: uma função que aceita um valor como parâmetro e subtrai esse valor do saldo da conta. Utilize this para acessar a propriedade saldo. Certifique-se de verificar se há saldo suficiente antes de efetuar o saque.
const contaBancaria = {
    titular: 'Victor Sánchez',
    saldo: 2530.35,
    depositar: function (valor) {
        this.saldo += valor
    },
    sacar: function (valor) {
        if (this.saldo < valor) {
            return 'Saldo insuficiente.'
        } else {
            this.saldo -= valor
        }
    }
}

// Crie um objeto chamado cliente que representa um cliente com uma conta bancária. O objeto deve ter as seguintes propriedades:
// nome: uma string representando o nome do cliente.
// conta: uma referência à conta bancária associada a esse cliente (objeto criado anteriormente).
// Crie uma função chamada mostrarSaldo que aceita o objeto cliente como parâmetro e imprime no console o nome do cliente e o saldo da sua conta utilizando this para acessar as propriedades do objeto.
const cliente = {
    nome: 'Victor Sánchez',
    conta: contaBancaria,
    mostrarSaldo: function () {
        return `Titular: ${this.conta.titular}, Saldo: ${this.conta.saldo}`
    }
}

console.log(cliente.mostrarSaldo())

// Realize operações de depósito e saque na conta bancária do cliente usando as funções do objeto contaBancaria e, em seguida, chame a função para exibir as informações atualizadas no console.

contaBancaria.depositar(1000);
contaBancaria.sacar(200);

console.log(cliente.mostrarSaldo())