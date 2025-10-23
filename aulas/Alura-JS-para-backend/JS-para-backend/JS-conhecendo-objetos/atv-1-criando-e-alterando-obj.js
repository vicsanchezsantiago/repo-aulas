// 1 - Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. O objeto deve conter as seguintes propriedades:

// titulo (string): título do livro.
// autor (string): nome do autor do livro.
// anoPublicacao (number): ano de publicação do livro.
// genero (string): gênero do livro.
// No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console.
const livro1 = {
    titulo: 'Crepúsculo dos Ídolos',
    autor: 'Friedrich Nietzsche',
    anoPublicacao: 1889,
    genero: 'Filosofia'
}

console.log(livro1)

// 2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.

// Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.

// Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.

// Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.

let anoAtual = new Date().getFullYear()
const livro2 = {
    titulo: 'Crepúsculo dos Ídolos',
    autor: 'Friedrich Nietzsche',
    anoPublicacao: 1889,
    genero: 'Filosofia'
}

livro2.idadePublicacao = anoAtual - livro2.anoPublicacao

let mostrarDetalhes = `${livro2.titulo}, de ${livro2.autor} (${livro2.genero}) foi publicado em ${livro2.anoPublicacao}, e possui ${livro2.idadePublicacao} anos de idade.`
console.log(mostrarDetalhes)

// 3 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.
const livro3 = {
    titulo: 'Fenomenologia do Espírito',
    autor: 'Wilhelm F. Hegel',
    anoPublicacao: 1807,
    genero: 'Filosofia',
    idadePublicacao: 218
}

console.log(`${livro3['titulo']}, de ${livro3['autor']} (${livro3['genero']}) foi publicado em ${livro3['anoPublicacao']}, e possui ${livro3['idadePublicacao']} anos de idade.`)

// 4 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.

// No final do arquivo livro.js, adicione uma avaliação ao objeto.

// Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.

// Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.

const livro4 = {
    titulo: 'Meditações sobre Filosofia Primeira',
    autor: 'René Descartes',
    anoPublicacao: 1641,
    genero: 'Filosofia',
    idadePublicacao: 384,
    avaliacao: null
}

if(livro4.avaliacao == null){
    livro4.avaliacao =  5
}else {
    console.log('O livro já possui avaliação.')
}

console.log(livro4)

// 5 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois altere o gênero do livro para "Aventura".
const livro5 = {
    titulo: 'Meditações sobre Filosofia Primeira',
    autor: 'René Descartes',
    anoPublicacao: 1641,
    genero: 'Filosofia',
    idadePublicacao: 384
}

livro5.genero = 'Aventura'
console.log(livro5)

// 6 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.
const livro6 = {
    titulo: 'Meditações sobre Filosofia Primeira',
    autor: 'René Descartes',
    anoPublicacao: 1641,
    genero: 'Filosofia',
    idadePublicacao: 384,
    avaliacao: 4
}

delete livro6.avaliacao
console.log(livro6)

