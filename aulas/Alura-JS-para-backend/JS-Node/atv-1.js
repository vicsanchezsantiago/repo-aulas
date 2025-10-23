// const fs = require('fs');

// fs.readFile('./ai-carai.txt','utf-8',(erro, texto) =>{
//     console.log(texto);
    
// })

// let texto = "lor23i12j daskdmsak 213kk2j32 sd1248*&&¨8*¨*&%$999998888"

// console.log(texto.replace(/[lor82das3k&9i14*"$%]/g,''))

function teste (x) {
    let date = new Date();
    date.setMinutes(date.getMinutes() - x);
    return date.toISOString();
    }
    
console.log(teste(178));