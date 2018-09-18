function verificaSenha() {

    var inNome = document.getElementById("inNome");
    var inSenha = document.getElementById("inSenha");
    var outResposta = document.getElementById("outResposta");

    var nome = inNome.value;
    var senha = inSenha.value;
    var erros = [];

    var validaSenha = [];
    var a = nome;
    var regex = new RegExp(a);

    var str = senha;
    if (str.match(regex)) {
        erros.push("Não deve conter nome ou sobrenome do usuário");
    }
    if (senha.length < 8 || senha.length > 12) {
        erros.push("possuir entre 8 e 15 caracteres")
    }

    if (senha.match(/[0-9]/g) == null) {
        erros.push("possuir números(no mínimo, 1");
    }
    if (!senha.match(/[a-z]/g)) {
        erros.push("possuir letras minúsculas (no mínimo,3");
    }
    if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1) {
        erros.push("possuir letras maiúsculas (no mínimo, 1");
    }
    if (!senha.match(/[\W|_]/g)) {
        erros.push("possuir símbolos(no mínimo, 3")
    }
    if (erros.length == 0) {
        outResposta.textContent = "Ok! Senha Válida"
    } else {
        outResposta.textContent = "Erro... A senha deve" + erros.join(", ");
    }
}
var btValidar = document.getElementById("btValidar");
btValidar.addEventListener("click", verificaSenha);