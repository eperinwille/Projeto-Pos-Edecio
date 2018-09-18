// captura o elemento "pai" dos elementos h5 manipulados
var divQuadro = document.getElementById("divQuadro");

function adicionarProduto() {

  var produto = inProduto.value;

  if (produto == "") {
    alert("Informe o produto a ser inserido");
    inProduto.focus();
    return;
  }

  // cria um novo elemento na página
  var h5 = document.createElement("h5");
  // cria um novo elemento de texto
  var texto = document.createTextNode(produto);
  // vincula (indica o pai) de cada elemento criado
  h5.appendChild(texto);
  divQuadro.appendChild(h5);

  inProduto.value = "";
  inProduto.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarProduto);

var inProduto = document.getElementById("inProduto");
inProduto.addEventListener("keypress", function(tecla) {
  // se pressionou enter (código 13)
  if (tecla.keyCode==13) {
    adicionarProduto();
  }
});

function selecionarProduto() {
  // captura todos os elementos da página da tag h5
  var h5 = document.getElementsByTagName("h5");
  // obtém o número de elementos obtidos
  var numH5 = h5.length;

  if (numH5 == 0) {
    alert("Não há produtos a selecionar");
    return;
  }

  // variável auxiliar para indicar elemento selecionado
  var aux = -1;

  for (var i = 0; i < numH5; i++) {
    if (h5[i].className == "produtoSelecionado") {
      h5[i].className = "produtoNormal";
      aux = i;
      break;
    }
  }

  // se o selecionado for o último, volta ao início
  if (aux == numH5 - 1) {
    aux = -1;
  }

  h5[aux + 1].className = "produtoSelecionado";
}
var btSelecionar = document.getElementById("btSelecionar");
btSelecionar.addEventListener("click", selecionarProduto);

function excluirProduto() {
  var h5 = document.getElementsByTagName("h5");
  var numH5 = h5.length;

  var aux = -1;

  for (var i = 0; i < numH5; i++) {
    if (h5[i].className == "produtoSelecionado") {
      aux = i;
      break;
    }
  }

  if (aux == -1) {
    alert("Não há produto selecionado para exclusão");
    return;
  }

  if (confirm("Confirma a exclusão do produto '" +
    h5[aux].textContent + "'?")) {
    divQuadro.removeChild(h5[aux]);
  }
}
var btRetirar = document.getElementById("btRetirar");
btRetirar.addEventListener("click", excluirProduto);

function salvarDados() {
  var h5 = document.getElementsByTagName("h5");
  var numH5 = h5.length;

  var dados = "";

  for (var i = 0; i < numH5; i++) {
    dados = dados + h5[i].textContent + ";";
  }

  // salva em localStorage
  localStorage.setItem("comprasSemana",
    dados.substr(0, dados.length - 1));
}
window.addEventListener("beforeunload", salvarDados);

function recuperarDados() {
  if (localStorage.getItem("comprasSemana")) {
    var dados = localStorage.getItem("comprasSemana").split(";");

    for (var i = 0; i < dados.length; i++) {
      // cria um novo elemento na página
      var h5 = document.createElement("h5");
      // cria um novo elemento de texto
      var texto = document.createTextNode(dados[i]);
      // vincula (indica o pai) de cada elemento criado
      h5.appendChild(texto);
      divQuadro.appendChild(h5);
    }
  }
}
window.addEventListener("load", recuperarDados);