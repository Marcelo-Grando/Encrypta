
const buttonUno = document.querySelector('#btn1');
const buttonDos = document.querySelector('#btn2')

var contador = 0;


function isLowerCase(str) {
    return str == str.toLowerCase() && str != str.toUpperCase();
}

function detectar(parametro) {
    for (let i = 0; i < parametro.length; i++) {
        if (parametro[i] === ' ' || isLowerCase(parametro) === true) {
            return true
        }
    }
    return false; 
}


function mostrarContenido(parametro) {
    
    contador++
    if (detectar(parametro)) {
        const container = document.querySelector('.container');
        let caja = document.createElement('div');
        caja.setAttribute('id', `${contador}`)
        caja.innerHTML = parametro
        if (container.children) {
            container.replaceChildren(caja)
        }
        container.appendChild(caja)
    } else {
        alert('Caracter invalido: el texto no puede contener mayusculas o caracteres especiales')
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
    
        mostrarContenido(result)
    } else {
        alert('ingrese un mensaje')
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
    
    mostrarContenido(cambio)
}
    
buttonUno.onclick = encriptar;
buttonDos.onclick = desencriptar;


