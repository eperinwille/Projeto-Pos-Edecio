var tbFilmes = document.getElementById("tbFilmes");
var inTitulo = document.getElementById("inTitulo");
var inGenero = document.getElementById("inGenero");
var ckTodos = document.getElementById("ckTodos");

function adicionarFilme() {

  var titulo = inTitulo.value;
  var genero = inGenero.value;

  if (titulo == "" || genero == "") {
    alert("Informe os dados do filme");
    inTitulo.focus();
    return;
  }

  inserirFilme(titulo, genero);

  gravarFilme(titulo, genero);

  inTitulo.value = "";
  inGenero.value = "";
  inTitulo.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarFilme);

function inserirFilme(titulo, genero) {
  // insere uma nova linha na tabela
  var linha = tbFilmes.insertRow(-1);

  // cria as colunas
  var col1 = linha.insertCell(0);
  var col2 = linha.insertCell(1);
  var col3 = linha.insertCell(2);

  // conteúdos das colunas
  col1.textContent = titulo;
  col2.textContent = genero;
  col3.innerHTML = "<input type='checkbox'>";
}

function gravarFilme(titulo, genero) {
  // se houver dados salvos, acrescenta os novos titulo e genero
  if (localStorage.getItem("filmesTitulo")) {
    localStorage.setItem("filmesTitulo",
      localStorage.getItem("filmesTitulo") + ";" + titulo);
    localStorage.setItem("filmesGenero",
      localStorage.getItem("filmesGenero") + ";" + genero);
  } else {
    localStorage.setItem("filmesTitulo", titulo);
    localStorage.setItem("filmesGenero", genero);
  }
}

function recuperarFilmes() {
  if (localStorage.getItem("filmesTitulo")) {
    var titulos = localStorage.getItem("filmesTitulo").split(";");
    var generos = localStorage.getItem("filmesGenero").split(";");

    for (var i = 0; i < titulos.length; i++) {
      inserirFilme(titulos[i], generos[i]);
    }
  }
}
window.addEventListener("load", recuperarFilmes);

ckTodos.addEventListener("change", function () {
  var ckExcluir = tbFilmes.getElementsByTagName("input");

  var status = ckTodos.checked;

  for (var i = 0; i < ckExcluir.length; i++) {
    ckExcluir[i].checked = status;
  }
});

function excluirSelecionados() {
  var ckExcluir = tbFilmes.getElementsByTagName("input");

  var existe = false;

  for (var i = 0; i < ckExcluir.length; i++) {
    if (ckExcluir[i].checked) {
      existe = true;
      break;
    }
  }

  if (!existe) {
    alert("Não há filmes marcados para exclusão");
    return;
  }

  if (confirm("Confirma a exclusão dos filmes selecionados?")) {
    // limpa o conteúdo do localStorage
    localStorage.removeItem("filmesTitulo");
    localStorage.removeItem("filmesGenero");

    for (var i = 1; i < ckExcluir.length; i++) {
      // se não estiver marcado para exclusão
      if (!ckExcluir[i].checked) {
        var titulo = tbFilmes.rows[i].cells[0].textContent;
        var genero = tbFilmes.rows[i].cells[1].textContent;
        gravarFilme(titulo, genero);
      }
    }

    // retira as linhas da tabela (do fim para o início)
    for (var i = ckExcluir.length - 1; i > 0; i--) {
      if (ckExcluir[i].checked) {
        tbFilmes.deleteRow(i);
      }
    }

    // desmarca ckTodos
    ckExcluir[0].checked = false;
  }
}
var btExcluir = document.getElementById("btExcluir");
btExcluir.addEventListener("click", excluirSelecionados);
