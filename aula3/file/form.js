var inFoto = document.getElementById("inFoto");
var outFoto = document.getElementById("outFoto");

function previewFile() {
  var foto = inFoto.files[0];
  var reader = new FileReader();

  if (!foto.type.startsWith("image/")) {
    outFoto.src = "";
    return;
  }

  reader.addEventListener("load", function() {
    outFoto.src = reader.result;
  });

  reader.readAsDataURL(foto);
}
inFoto.addEventListener("change", previewFile);