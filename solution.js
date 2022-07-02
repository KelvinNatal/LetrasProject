var readline = require('readline');
var rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
terminal: false
}); 

rl.question('Digite a frase:', input => {
    var resposta ='';
    var resposta2 = '';
    var palavras = input.split(' ')
    for(var i = 0; i<palavras.length; i++){
      resposta = palavras[i].replace(/(.)(?=.*\1)/g, '');
      if(resposta === palavras[i]){
           resposta2 = input;      
           break;          
      }else{
           resposta2 += palavras[i].replace(/(.)(?=.*\1)/g, '') + " ";
      }
    } 
    console.log(resposta2);
    rl.on('line',  entrada => {;                                       
    console.log("Salve\n" + entrada);
})


})
