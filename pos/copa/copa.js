var apostas = [];

function adicionarAposta() {
  // cria referência aos elementos da página
  var inNome = document.getElementById("inNome");
  var inGolsRussia = document.getElementById("inGolsRussia");
  var inGolsCroacia = document.getElementById("inGolsCroacia");

  // obtém o conteúdo do campo 
  var nome = inNome.value;
  var gRussia = Number(inGolsRussia.value);
  var gCroacia = Number(inGolsCroacia.value);

  if (nome == "" || inGolsRussia.value == "" || 
      inGolsCroacia.value == "") {
    alert("Preencha corretamente os dados");
    inNome.focus();
    return;
  }

  var reg = {nome: nome, gRus: gRussia, gCro: gCroacia};

  // adiciona um novo registro ao vetor
  apostas.push(reg);

  // classifica (ordena) o vetor pelo campo nome
  apostas.sort(function (a,b) {return a.nome > b.nome ? 1 : -1 });

  mostrarApostas();

  inNome.value = "";
  inGolsRussia.value = "";
  inGolsCroacia.value = "";
  inNome.focus();
}
var btApostar = document.getElementById("btApostar");
btApostar.addEventListener("click", adicionarAposta);

function mostrarApostas() {
  var outApostas = document.getElementById("outApostas");

  var lista = "";
  
  for (var i=0; i<apostas.length; i++) {
    lista = lista + apostas[i].nome + ": Rússia " + 
                    apostas[i].gRus + " x " +
                    apostas[i].gCro + " Croácia\n";
  }

  outApostas.textContent = lista;
}

function salvarApostas() {
  var lista = "";
  
  for (var i=0; i<apostas.length; i++) {
    lista = lista + apostas[i].nome + ";" + 
                    apostas[i].gRus + ";" +
                    apostas[i].gCro + ";";
  }

  localStorage.setItem("apostas", 
               lista.substr(0, lista.length-1));

  alert("Ok! Dados salvos com sucesso!");               
}
var btSalvar = document.getElementById("btSalvar");
btSalvar.addEventListener("click", salvarApostas);

function recuperarDados() {
  // obtém dados salvos em localStorage e converte em
  // elementos de vetor
  var dados = localStorage.getItem("apostas").split(";");

  for (var i=0; i<dados.length; i=i+3) {
    apostas.push({nome: dados[i], gRus: dados[i+1], 
                  gCro: dados[i+2]});
  }

  mostrarApostas();
}
window.addEventListener("load", recuperarDados);

function excluirAposta() {
  var quem = prompt("Quem deve ser excluído? ");
 
  if (quem == "") {
    return;
  }

  var existe = false;

  for (var i=0; i<apostas.length; i++) {
    if (quem.toUpperCase() == apostas[i].nome.toUpperCase()) {
      apostas.splice(i, 1);
      existe = true;
      break;
    }
  }

  if (existe) {
    mostrarApostas();
  }  else {
    alert(quem + " não está participando da brincadeira...");
  } 
}
document.getElementById("btExcluir").
         addEventListener("click", excluirAposta);
