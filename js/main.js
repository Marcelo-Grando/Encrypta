<<<<<<< HEAD:main.js

const buttonUno = document.querySelector('#btn1');
const buttonDos = document.querySelector('#btn2');



function isLowerCase(str) {
    return str == str.toLowerCase() && str != str.toUpperCase();
}

function detectar(parametro) {
    for (let i = 0; i < parametro.length; i++) {
        if (parametro[i] === ' ' || isLowerCase(parametro) === true) {
            return true;
        }
    }
    return false; 
}

function copiar(texto) {
    var text = texto.innerText;
    navigator.clipboard.writeText(text);
}

function mostrarContenido(parametro) {
    
    if (detectar(parametro)) {
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
    } else {
        alert('Caracter invalido: el texto no puede contener mayusculas o caracteres especiales');
    }
    
}

 

function encriptar(e) {
    
    var textoSinEncriptar = document.querySelector('textarea').value


    if (textoSinEncriptar != '') {
        let arreglo = [];

    for (let i = 0; i < textoSinEncriptar.length; i++) arreglo.push(textoSinEncriptar[i])


        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i] === 'a') {
                arreglo[i] = 'ai'
            }
            if (arreglo[i] === 'e') {
                arreglo[i] = 'enter'
            }
            if (arreglo[i] === 'i') {
                arreglo[i] = 'imes'
            }
            if (arreglo[i] === 'u') {
                arreglo[i] = 'ufat'
            }
            if (arreglo[i] === 'o') {
                arreglo[i] = 'ober'
            }
        }
    
        var result = arreglo.join('')
    
        mostrarContenido(result);
    } else {
        alert('ingrese un mensaje');
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


=======

const buttonUno = document.querySelector('#btn1');
const buttonDos = document.querySelector('#btn2');



function isLowerCase(str) {
    return str == str.toLowerCase() && str != str.toUpperCase();
}

function detectarCaracterInvalido(texto) {
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] != ' ' && isLowerCase(texto[i]) === false) {
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


    if (textoSinEncriptar != '' && detectarCaracterInvalido(textoSinEncriptar)) {
    
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


>>>>>>> 10375b3 (validacion de caracteres corregida y reorganizacion de codigo):js/main.js
