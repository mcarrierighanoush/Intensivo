// Se quer seguir para área de Front-End ou seguir para a área de Back-End.
// Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.
// Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.
// Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

const carreira = prompt ("Qual carreira deseja seguir? Front-End ou Back-End? Responda Front ou Back");

if (carreira == "Front"){
  let linguagem =  prompt ("Qual das linguagens deseja iniciar? React ou Vue?");
  if (linguagem == "Vue")
    alert ("Muito bem! A Linguagem Vue é bem divertida!");
  else {
    alert ("Muito bem! A Linguagem React é bem divertida!");
  }
}
if (carreira == "Back") {
  let linguagem = prompt ("Qual das seguintes linguagens deseja inicar, C# ou Java?");
  if (linguagem == "C#")
    alert ("Muito bem! A Linguagem C# é bem divertida!")
  else{
    alert ("Muito bem! A Linguagem Java é bem divertida!")
  }
}

var novaLinguagem = prompt ("Gostaria de aprender outra lingagem? Sim ou Não?");
if (novaLinguagem === "Sim" ){
    var modelos = prompt ("Quais?");
    while (maisUma !== "Não");
     var maisUma = prompt ( "Mais Alguma? Digite Não para sair");
  if (maisUma == "Não")
  alert ("Bons Estudos!")
 }
if (novaLinguagem === "Não"){
  alert (`Muito bem! bons estudos na linguagem escolhida`);
}