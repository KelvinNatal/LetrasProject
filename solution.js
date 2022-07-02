var readline = require('readline');
var rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
terminal: false
}); 

    rl.setPrompt("Digite a palavra:");
    rl.prompt();
    rl.on('line',  entrada => {                                       
      var resposta ='';
      var resposta1 = '';
      var palavras = entrada.split(' ')
    for(var i = 0; i<palavras.length; i++){
      resposta = palavras[i].replace(/(.)(?=.*\1)/g, '');
      if(resposta === palavras[i]){
           resposta1 = entrada;      
           break;          
      }else{
           resposta1 += palavras[i].replace(/(.)(?=.*\1)/g, '') + " ";
      }
    } 
    console.log(resposta1);
    })
