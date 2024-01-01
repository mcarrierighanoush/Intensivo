var fruta = [];
var laticinios = [];
var congelado = [];
var doce = [];
var alimento = "";
var tipo = "";
var lista = "adicionar";
while (lista == "adicionar"){
  lista = prompt ("'gostaria de 'adicionar' produto a lista ou 'remover'?");
    if(lista == "adicionar"){ 
    alimento = prompt ("Qual iten gostaria de adicionar a lista?");
    tipo = prompt ('Este alimento é uma fruta, laticinio, congelado ou doce?');
 
    if(tipo == 'fruta'){
      fruta.push(alimento);
  } else if (tipo == 'laticínios'){
      laticinios.push(alimento);
  } else if (tipo == 'doce'){
      doce.push(alimento);
  } else {
    congelado.push(alimento);
  }

}
}
alert (`A lista de frutas: ${fruta} 
A lista de laticinios: ${laticinios}
Alista de congelados: ${congelado}
Alista de doces: ${doce}`)

