
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

function mostrarContenido(parametro) {
    
        const container = document.querySelector('.container');
        let caja = document.createElement('div');
        caja.innerHTML = parametro;
        let btn = document.createElement('button');
        btn.innerText = 'copy';
        if (container.children) {
            container.replaceChildren(caja)
        }
        container.appendChild(caja);
        container.appendChild(btn);
        btn.onclick = () => copiar(caja);
}

 

function encriptar() {
    
    var textoSinEncriptar = document.querySelector('textarea').value


    if (textoSinEncriptar != '' && detectarCaracterInvalido(textoSinEncriptar)) {
    
        var result = textoSinEncriptar.replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat')
    
        mostrarContenido(result);
    } else {
        if (textoSinEncriptar === '') alert('ingrese un mensaje');
        alert('Caracter invalido: no son validas mayuscaules y/o caracteres especiales')
    }

    document.querySelector('textarea').value = '';

}

function desencriptar() {
    var textoEncriptado = document.querySelector('textarea').value
    
    var cambio = textoEncriptado.replaceAll('ai', 'a')
        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u')
    
    mostrarContenido(cambio);
    document.querySelector('textarea').value = '';
}
    
buttonUno.onclick = encriptar;
buttonDos.onclick = desencriptar;


