
// Você já brincou de tentar adivinhar o número que seu amigo ou amiga estava pensando? Hoje você vai voltar na infância e fazer exatamente isso. Mas agora, o jogo vai ser contra o próprio computador!
// Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).
// Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.
// No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.
// Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.

var numeroSecreto = parseInt(Math.random() * 1000) + 1;
var tentativas = 0;

while(chute != numeroSecreto) {
  var chute = prompt("Chute um número entre 1 e 1000");
  tentativas++;

  if (chute == numeroSecreto) {
    alert("Você acertou!!");
  } else if (chute < numeroSecreto) {
    alert(`O número secreto é maior que ${chute}`);
  } else if (chute > numeroSecreto) {
    alert(`O número secreto é menor ${chute}`);
  }
}

alert("Você deu " + tentativas + " tentativas.");