const inputTexto = document.querySelector(".texto-ingresado")
const mensaje = document.querySelector(".mensaje")

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none"
    inputTexto.value = ""
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    inputTexto.value = ""
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0]))
        {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada){
    let matrizCodigo1 = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];

    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let b = 0; b < matrizCodigo1.length; b++){
        if(stringDesencriptada.includes(matrizCodigo1[b][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo1[b][0],matrizCodigo1[b][1]);
        }
    }
    return stringDesencriptada;
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value=""
}
