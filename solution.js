var readline = require('readline');
var rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
terminal: false
}); 

    rl.setPrompt("Digite a palavra:");
    rl.prompt();
    rl.on('line',  entrada => {                                       
      let resposta ='';
      let resposta1 = '';
      let palavras = entrada.split(' ')
    for(let i = 0; i<palavras.length; i++){
      resposta1 = palavras[i].replace(/(.)(?=.*\1)/g, '');
      if(resposta1 === palavras[i]){
           resposta = entrada;      
           break;          
      }else{
          resposta += palavras[i].replace(/(.)(?=.*\1)/g, '') + " ";
          
      }
    }
    console.log(resposta);
    })
