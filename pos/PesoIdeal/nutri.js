function calcularPeso() {

    var inNome = document.getElementById("inNome");
    var inSexo = document.getElementById("inSexo");
    var inAltura = document.getElementById("inAltura");
    var outResposta = document.getElementById("outResposta");


    var nome = inNome.value;
    var altura = Number(inAltura.value);

    if (inSexo.value == "Masc") {
        var Masculino = inSexo.value;
    } else {
        var Feminino = inSexo.value;
    }


    var altura = Number(inAltura.value);

    if (nome == "" || (Masculino == "" && Feminino == "")) {
        alert("Por favor, informe o nome e selecione o sexo...");
        inNome.focus();
        return;
    }
    if (altura == 0 || isNaN(altura)) {
        alert("Por favor, informe a altura corretamente...")
        inAltura.focus();
        return;
    }

    if (Masculino) {
        var peso = 22 * Math.pow(altura, 2);

    } else {
        var peso = 21 * Math.pow(altura, 2);

    }


    outResposta.textContent = nome + ": Seu peso ideal é " + peso.toFixed(3) + " kg";
}


var btResultado = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPeso);

function limpaCampos() {
    location.reload();
    document.getElementById("inNome").focus();
    document.getElementById("inAltura").focus();

}


var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limpaCampos);