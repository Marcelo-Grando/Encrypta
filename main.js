
const buttonUno = document.querySelector('#btn1');
const buttonDos = document.querySelector('#btn2');



function isLowerCase(str) {
    return str == str.toLowerCase() && str != str.toUpperCase();
}

function detectarCaracterInvalido(texto) {
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === ' ' && isLowerCase(texto[i]) === false) {
            return false;
        }
    }
    return true; 
}

function copiar(texto) {
    var text = texto.innerText;
    navigator.clipboard.writeText(text);
}

function remplazarElemento(container, elemento ) {
    if (container.children) {
        container.replaceChildren(elemento);
    }
    return container
}



function mostrarContenido(texto) {

    const container = document.querySelector('.container');

    const cajaDeTexto = document.createElement('div');
    cajaDeTexto.innerHTML = texto;

    let btn = document.createElement('button');
    btn.innerText = 'copy';
    
    remplazarElemento(container, cajaDeTexto)

    container.appendChild(cajaDeTexto)
    container.appendChild(btn)

    btn.onclick = () => copiar(cajaDeTexto)

    return cajaDeTexto;
}
 


function encriptar() {
    
    var textoSinEncriptar = document.querySelector('textarea').value


    if (textoSinEncriptar != '' && !detectarCaracterInvalido(textoSinEncriptar)) {
    
        var textoEncriptado = textoSinEncriptar.replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat')
    
        mostrarContenido(textoEncriptado);
    } else {
        if (textoSinEncriptar === '') return alert('ingrese un mensaje');
        alert('Carácter invalido: no son validas letras mayúsculas y/o carácteres especiales')
    }

    document.querySelector('textarea').value = '';

}

function desencriptar() {

    var textoEncriptado = document.querySelector('textarea').value
    
    var textoDesencriptado = textoEncriptado.replaceAll('ai', 'a')
        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u')
    
    mostrarContenido(textoDesencriptado);

    document.querySelector('textarea').value = '';
}
    
buttonUno.onclick = encriptar;
buttonDos.onclick = desencriptar;


