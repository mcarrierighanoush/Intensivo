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