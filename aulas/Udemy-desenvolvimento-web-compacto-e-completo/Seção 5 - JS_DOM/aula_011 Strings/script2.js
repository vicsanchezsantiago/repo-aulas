// STRINGS

let frase1 = "Esta frase serve para testes"
console.log(frase1.length) //.lenght exibe qtd caracteres possui

let frase2 = "Esta frase não serve apenas para testes"
console.log(frase2.indexOf("apenas"))//.indexOf indica posição em que está o valor declarado. Se indicarmos uma palavra que não existe na string, é exibido -1.

let frase3 = "Esta frase está dividida em duas."
let frase4 = "Esta é a segunda parte"
let frase_final = frase3 + " " + frase4
console.log(frase_final)
