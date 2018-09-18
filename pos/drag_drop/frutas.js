// gera um número aleatório entre 1 e 8
var num = Math.floor(Math.random() * 8);

var frutas = ["Abacate", "Mamão", "Pêra", "Laranja", 
              "Pêssego", "Banana", "Morango", "Maçã"];

var imagens = ["imgAbacate", "imgMamao", "imgPera", "imgLaranja",
               "imgPessego", "imgBanana", "imgMorango", "imgMaca"];
               
var quadroDestino = document.getElementById("quadroDestino");

quadroDestino.addEventListener("dragover", permitirSoltar);
quadroDestino.addEventListener("drop", soltar);

for (var i=0; i<imagens.length; i++) {
  document.getElementById(imagens[i]).addEventListener("dragstart", arrastar);
}

function permitirSoltar(event) {
  event.preventDefault();
}

function arrastar(event) {
  var id = event.target.id;
  // salva os dados que estão sendo arrastados
  event.dataTransfer.setData("fruta", id);
}

function soltar(event) {
  // recupera o dado salvo
  var id = event.dataTransfer.getData("fruta");

  event.target.appendChild(document.getElementById(id));

  if (id == imagens[num]) {
    alert("Parabéns!! Você acertou!");
  } else {
    alert("Ops... tente novamente clicando em atualizar");
  }

  quadroDestino.removeEventListener("drop", soltar);
}

function mostrarFruta() {
  var outFruta = document.getElementById("outFruta");
  outFruta.textContent = frutas[num];
}
window.addEventListener("load", mostrarFruta);