let textoinicial = document.querySelector(".panelIngreso-textArea");
let textofinal = document.querySelector(".panelEgreso-textArea");



function encriptar(texto) {
    if (texto == "") {
        document.getElementById('panelEgreso-textArea').s;
    } else {
        texto = texto.toLowerCase();
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        for (let i = 0; i < matrizCodigo.length; i++) {
            if (texto.includes(matrizCodigo[i][0])) {
                texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        } return texto;
    }


}

function btnEncriptar() {
    let textoEncriptado = encriptar(textoinicial.value);
    textofinal.value = textoEncriptado;
    textoinicial.value = "";
    textofinal.style.backgroundImage = "none";
}

function desencriptar(texto) {
    texto = texto.toLowerCase();
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (texto.includes(matrizCodigo[i][0])) {
            texto = texto.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    } return texto;
}

function btnDesencriptar() {
    let textoDesencriptado = desencriptar(textoinicial.value);
    textofinal.value = textoDesencriptado;
    textoinicial.value = "";
    textofinal.style.backgroundImage = "none";
}

function mostrarBotonCopiar() {
    document.getElementById('panelEgreso-buttonCopiar').style.display = 'block';
}

function copiar() {
    var texto = document.getElementById("panelEgreso-textArea");
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand('copy');
}
