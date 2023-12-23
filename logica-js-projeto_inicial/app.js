alert('Boas vindas ao jogo do número Secreto!');

let nomeUsuario = prompt('Qual o seu nome?', 'Seu nome aqui');
console.log(nomeUsuario);
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute
//aqui criei a variável que vai armazenar a quantidade de tentativas que o usuário realizará,
//iniciando com o valor '1' porque parte da primeira tentativa
let tentativas = 1;
//estrutura enquanto, que é muito semelhante a estrutura de repetição for
//nesse caso, enquanto o chute não for igual(ou se o chute for diferente) ao número secreto
while(chute != numeroSecreto){
    chute = prompt(`${nomeUsuario}, chute um número entre 1 e 10`); 
    //condições para acertar o número secreto
    if (chute == numeroSecreto){
        alert(`Isso aí! Você descobriu o número secreto com ${tentativas} tentativa${tentativas === 1 ? '' : 's'}!`);
    } else {
    if (chute > numeroSecreto){
        alert(`O número secreto é menor que ${chute}`);
    }    else {
        alert(`O número secreto é maior que ${chute}`);
    }
    //tentativas = tentativas + 1; dessa forma se tem o mesmo comportamento de baixo,
    //mas de um jeito mais otimizado, deixando o código mais clean
    tentativas ++
    }
    
}
