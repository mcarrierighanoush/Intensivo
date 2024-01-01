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