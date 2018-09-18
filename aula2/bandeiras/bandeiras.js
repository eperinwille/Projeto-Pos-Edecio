var canBandeira = document.getElementById("canBandeira");
var outPais = document.getElementById("outPais");

function desenharItalia() {
    var fig = canBandeira.getContext("2d");

    // limpa o desenho anterior
    fig.clearRect(0, 0, 300, 150);

    fig.fillStyle = "green";
    fig.fillRect(0, 0, 100, 150);

    fig.fillStyle = "red";
    fig.fillRect(200, 0, 100, 150);

    outPais.textContent = "Bandeira da Itália";
}
var btItalia = document.getElementById("btItalia");
btItalia.addEventListener("click", desenharItalia);

function desenharSudao() {
    var fig = canBandeira.getContext("2d");

    // limpa o desenho anterior
    fig.clearRect(0, 0, 300, 150);

    fig.fillStyle = "red";
    fig.fillRect(0, 0, 300, 50);

    fig.fillStyle = "black";
    fig.fillRect(0, 100, 300, 50);

    fig.fillStyle = "green";
    fig.beginPath();
    fig.moveTo(0, 0);
    fig.lineTo(0, 150);
    fig.lineTo(90, 75);
    fig.fill();

    outPais.textContent = "Bandeira do Sudão";
}
var btSudao = document.getElementById("btSudao");
btSudao.addEventListener("click", desenharSudao);