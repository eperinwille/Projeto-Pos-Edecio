var fotoCarro = document.getElementById('fotoCarro');
var outPreco = document.getElementById('outPreco');
var inEntrada = document.getElementById('inEntrada');
var veiculo = ""
var parc12 = document.getElementById('parc12');
var parc18 = document.getElementById('parc18');
var parc24 = document.getElementById('parc24');

function alteraImagem(chamador) {

    if (chamador.id == "inSandero") {
        fotoCarro.src = 'sandero.jpg';
        fotoCarro.className = 'exibe';
        outPreco.value = "45000.00";
        outPreco.innerHTML = "45000.00";
        veiculo = "Sandero";
    } else if (chamador.id == "inGol") {
        fotoCarro.src = 'gol.jpg';
        fotoCarro.className = 'exibe';
        outPreco.value = "39000.00";
        outPreco.innerHTML = "39000.00";
        veiculo = "Gol";
    } else if (chamador.id == "inPalio") {
        fotoCarro.src = 'palio.jpg';
        fotoCarro.className = 'exibe';
        outPreco.value = "34900.00";
        outPreco.innerHTML = "34900.00";
        veiculo = "Palio";
    }
}

function validaEntrada(chamador) {
    var preco = Number(outPreco.value);
    var entrada = preco * 0.50;

    if (Number(chamador.value) < entrada) {
        alert("Desculpe, o valor da entrada deve ser no mínimo 50% do valor do veículo");
    } else if (Number(chamador.value) > preco) {
        alert("Por favor digite um valor menor que o valor do veículo");
    } else {
        document.getElementById("parc12").checked = true;
    }
}

function mostraPromocao() {
    var entrada = inEntrada.value;


    var outVeiculo = document.getElementById("outVeiculo");
    var outEntrada = document.getElementById("outEntrada");
    var outParcela = document.getElementById("outParcela");
    var outValor = document.getElementById("outValor");
    var divResumo = document.getElementById("divResumo");

    divResumo.className = "row text-danger exibe";


    if (parc12.checked) {
        outVeiculo.textContent = veiculo
        outEntrada.textContent = entrada
        outParcela.textContent = 12;
        outvalor.textContent = (valor - entrada) / 12;
    } else if (parc18.checked) {
        outVeiculo.textContent = veiculo
        outEntrada.textContent = entrada
        outParcela.textContent = 18;
        outValor.textContent = (valor - Entrada) / 18;
    } else if (parc24.checked) {
        outVeiculo.textContent = veiculo
        outEntrada.textContent = entrada
        outParcela.textContent = 24;
        outValor.textContent = (valor - Entrada) / 24;
    } else {
        alert("Defina as parcelas")
        return;
    }
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", mostraPromocao);