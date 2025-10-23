// 1 - Crie um objeto chamado pessoa que represente informações sobre uma pessoa. O objeto deve ter as seguintes propriedades: nome e notas. Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.

const pessoa = {
    nome: 'Vic',
    notas: [10, 8, 7],
    calcularMediaNotas: function () {
        let soma = 0
        for (let elemento of this.notas) {
            soma += elemento
        }
        return (soma / this.notas.length).toFixed(2)
    }
}

// Adicione um método chamado classificarDesempenho ao objeto pessoa. Este método deve retornar uma categoria de desempenho com base na média calculada. Utilize as seguintes categorias:

// Desempenho excelente: média >= 9
// Bom desempenho: 7.5 <= média entre 7.6 e 8.9
// Desempenho regular: 6 <= média entre 6 e 7.5
// Desempenho insuficiente: média < 6
// Chame o método calcularMediaNotas para calcular a média das notas da pessoa e imprima no console a média calculada.

// Chame o método classificarDesempenho e imprima no console a categoria de desempenho da pessoa.

pessoa.classificarDesempenho = function () {
    const media = parseFloat(this.calcularMediaNotas());
    let retorno
    if (media >= 9) { retorno = 'Desempenho excelente' }
    if (media >= 7.5 && media < 9) { retorno = 'Bom desempenho' }
    if (media >= 6 && media < 7.5) { retorno = 'Desempenho regular' }
    if (media < 6) { retorno = 'Desempenho insuficiente' }
    return retorno
}

console.log(pessoa.calcularMediaNotas())

const media = pessoa.calcularMediaNotas()

console.log(pessoa.classificarDesempenho())

// 2 - Crie um objeto chamado carro que represente as informações de um veículo. O objeto deve ter as seguintes propriedades:

// marca (string): marca do carro.
// modelo (string): modelo do carro.
// ano (number): ano de fabricação do carro.
// cor (string): cor do carro.
// Utilize o loop for...in para percorrer todas as propriedades do objeto carro e imprima no console o nome da propriedade e o seu valor.
const carro = {
    marca: 'Ford',
    modelo: 'Vish kk',
    ano: 2025,
    cor: 'Branco',
}

for (let chave in carro) {
    console.log(`O nome da propriedade é ${chave} e o valor é ${carro[chave]}.`)
}

// Adicione mais propriedades ao objeto carro para representar características adicionais do veículo.

// Utilize novamente o loop for...in para percorrer todas as propriedades atualizadas do objeto carro e imprima no console o nome da propriedade e o seu valor.
carro.seguro = true
carro.bagageiro = 'YES'

for (let chave in carro) {
    console.log(`O nome da propriedade é ${chave} e o valor é ${carro[chave]}.`)
}

// 3 - Crie um arquivo chamado metodosObjeto.js para realizar este exercício.

// Utilize o objeto carro do exercício 2 com as propriedades iniciais (marca, modelo, ano, cor) e adicione:

// ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não.
// ligar: um método que imprime no console uma mensagem indicando que o carro está ligado.
// desligar: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: se o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa.
// obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, estado de ligado/desligado).
// Em seguida, faça o seguinte:

// Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
// Chame o método obterDetalhes e imprima no console a string retornada.
const carro2 = {
    marca: 'Ford',
    modelo: 'Vish kk',
    ano: 2025,
    cor: 'Branco',
    ligado: false,
    ligar: function () {
        let retorno
        if (this.ligado === true) {
            retorno = `O carro já está ligado.`
        } else {
            retorno = `O carro está ligado.`;
            this.ligado = true;
        }
        return retorno
    },
    desligar: function () {
        let retorno
        if (this.ligado === false) {
            retorno = `O carro já está desligado.`
        } else {
            retorno = `O carro está desligado.`;
            this.ligado = false;
        }
        return retorno
    },
    obterDetalhes: function () {
        let detalhes = ''
        for (let chave in this) {
            if (typeof (this[chave]) !== 'function' && typeof (this[chave]) !== 'object') {
                detalhes += `${chave}: ${this[chave]}.\n`
            }
        }
        return detalhes
    }
}

console.log(carro2.ligar())

console.log(carro2.desligar())
console.log(carro2.desligar())

console.log(carro2.ligar())

carro2.obterDetalhes()

// 4 - No objeto carro, adicione uma nova propriedade chamada placa representando a placa do veículo. Defina a propriedade placa como não enumerável, para que ela não seja listada ao percorrer as propriedades do objeto.
Object.defineProperty(carro2, 'placa', {
    value: 'AB223-92A',
    enumerable: false
})

// Utilize um loop for...in para percorrer as propriedades do objeto carro e imprima no console apenas as propriedades enumeráveis.
for (let chave in carro2) {
    console.log(chave)
}

// Utilize o método Object.keys() para obter um array contendo apenas as chaves enumeráveis do objeto carro e imprima no console esse array.
console.log(Object.keys(carro2))

// Tente acessar a propriedade placa diretamente usando carro.placa e imprima no console o resultado obtido.
console.log(carro2.placa)



// 5 - Crie um novo objeto chamado carroNovo para representar as informações de um novo carro. O objeto deve ter as seguintes propriedades:

// marca (string): marca do novo carro.
// modelo (string): modelo do novo carro.
// ano (number): ano de fabricação do novo carro.
// cor (string): cor do novo carro.
// Utilize o operador de espalhamento (...) para criar um novo objeto chamado carroComNovosDetalhes que herde todas as propriedades do objeto carro e adicione as propriedades do objeto carroNovo.

// Imprima no console o objeto carroComNovosDetalhes para verificar as informações do carro com os novos detalhes.
const carroNovo = {
    marca: 'Sedan',
    modelo: 'N sei de carro',
    ano: 2020,
    cor: 'Preto'
}

const carroComNovosDetalhes = {
    ...carro2,
    ...carroNovo
}

console.log(carroComNovosDetalhes)
// Modifique o valor de uma propriedade no objeto carroComNovosDetalhes e imprima novamente o objeto no console para confirmar as alterações.

carroComNovosDetalhes.desligar()

console.log(carroComNovosDetalhes)