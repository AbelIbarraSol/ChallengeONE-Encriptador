let textoinicial = document.querySelector(".panelIngreso-textArea");
let textofinal = document.querySelector(".panelEgreso-textArea");
let mensaje_validacion = document.getElementById('panelEgreso-mensaje');
let btn_Copiar = document.getElementById('panelEgreso-buttonCopiar');

function encriptar(texto) {
    if (texto == "") {
        mensaje_validacion.style.display = "block";
        textoinicial.style.backgroundImage = url("../assets/icons/Muñeco.svg");
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
    textofinal.style.height = textofinal.scrollHeight + "px";
    textoinicial.value = "";
    textofinal.style.backgroundImage = "none";
    mensaje_validacion.style.display = "none";
}

function desencriptar(texto) {
    if (texto == "") {
        mensaje_validacion.style.display = "block";
        textoinicial.style.backgroundImage = url("../assets/icons/Muñeco.svg");
    } else {
        texto = texto.toLowerCase();
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        for (let i = 0; i < matrizCodigo.length; i++) {
            if (texto.includes(matrizCodigo[i][0])) {
                texto = texto.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            }
        } return texto;
    }
    
}

function btnDesencriptar() {
    let textoDesencriptado = desencriptar(textoinicial.value);
    textofinal.value = textoDesencriptado;
    textofinal.style.height = textofinal.scrollHeight + "px";
    textoinicial.value = "";    
    textofinal.style.backgroundImage = "none";
    mensaje_validacion.style.display = "none";
}

function mostrarBotonCopiar() {
    btn_Copiar.style.display = "block";
}

function copiar() {
    textofinal.select();
    textofinal.setSelectionRange(0, 99999);
    document.execCommand('copy');
}