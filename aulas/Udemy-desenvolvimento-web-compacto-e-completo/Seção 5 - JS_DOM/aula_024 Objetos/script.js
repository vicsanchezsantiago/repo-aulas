// OBJETOS - coleção de valores nomeados
// ------------------------------------
// definir um objeto
// ------------------------------------
//array - coleção de valores que começa do 0.

//dentro de uma varíavel, podemos definir um bloco de propriedades e métodos/funções.

// definimos as propriedades dos objetos com : e separamos com ,
let pessoa = {
    
    // propriedades
    nome: "Joao",
    apelido: "Ribeiro",
    idade: 48,
    genero: "masculino",

    // métodos
    apresentar_nome: function() {
        return this.nome + " " + this.apelido
    }, //.this é usado para se referir a um objeto. Nesse caso "esse nome" retorna o valor desse objeto.

    apresentar_idade: function() { 
        return this.idade + " anos de idade" 
    },

    hobbies: [
        'Programação',
        'Cinema',
        'Música'
    ]
}

// NOTA: As chaves podem surgir também com aspas.

// ------------------------------------
// apresentar dados de um objeto
// ------------------------------------

// console.log(pessoa.nome) //chama propriedade
// console.log(pessoa['idade']) //podemos apresentar usando simbologia semelhante ao do array, usando dentro das chaves o nome da propriedade a ser apresentada
// console.log(pessoa.apresentar_nome()) //chama nome da função()
// console.log(pessoa.apresentar_idade())
// console.log(pessoa.hobbies)


// ------------------------------------
// apresentar todas as propriedades do objeto
// ------------------------------------

// for(let propriedade in pessoa){
//     console.log(pessoa[propriedade])
// }


// ------------------------------------
// adicionar propriedades ao objeto
// ------------------------------------

// pessoa.email = "joao.ribeiro@gmail.com"
// //essa propriedade não existe, portanto foi adicionada.
// pessoa['mobile'] = "123456789"
// //usando chave também inserimos propriedades.
// console.log(pessoa.email)
// console.log(pessoa.mobile)
// console.log(pessoa)

// ------------------------------------
// eliminar propriedades de um objeto
// ------------------------------------

// delete pessoa.idade
// console.log(pessoa.idade)   // indefinido

// ------------------------------------
// MUITO IMPORTANTE: valor vs referência
// Os objetos são tratados como referências na memória.
// Quando copiamos um objeto a partir de outro, não estamos a criar um novo objeto. Apenas uma nova referência.

//Quando criamos objetos a partir de outro, estamos referenciando-o, e não copiando-o.

// ------------------------------------

// let transporte = {
//     tipo: "automóvel",
//     ano: 2032,
//     marca: "audi"
// }

// let novo_transporte = transporte
// novo_transporte.marca = "mercedes"

// console.table(transporte)
// console.table(novo_transporte)
//a alteração feita no novo_transporte influenciou na outra variável.

// -------------------------------------
// uma forma de criar um novo objeto a partir de outro:


//'Object.assign({},objeto)'

// let transporte_final = Object.assign({}, transporte)
// transporte_final.marca = "nissan"
// console.table(transporte)
// console.table(transporte_final)

// -------------------------------------

// outra forma: spread operator - {...}

// '{...objeto}' busca todos os valores do objeto, para copiá-lo.

// let transporte2 = { ...transporte }
// transporte2.marca = "tesla"
// console.table(transporte)
// console.table(transporte2)