/*-----------Variables globales-----------*/

const botonEncriptar = document.querySelector('#encriptador');
const botonDesencriptar = document.querySelector('#decodificador');
const botonCopiar = document.querySelector('#copiador');
const advice = document.querySelector('.advice');
const pAlert = document.querySelector('.alert-copiador');
const resultado = document.getElementById('resultado');


/*----------------Listeners---------------*/

botonEncriptar.addEventListener('click', encriptarTexto);
botonDesencriptar.addEventListener('click', desencriptarTexto);
botonCopiar.addEventListener('click', () => {
    if (resultado.textContent == '' ){
        pAlert.style.color = "red";
        pAlert.textContent = "No se ha encriptado/desencriptado nada";
        setTimeout(() => {
            pAlert.textContent = '';
        }, 3000);
    } else {
        resultado.select()
        document.execCommand('copy')
        pAlert.style.color = "green";
        pAlert.textContent = "Texto copiado correctamente";
        setTimeout(() => {
            pAlert.textContent = '';
        }, 3000);
    } 
})

/*------------detectar caracteres-----------*/

function corroborarCaracteres(cadenaDeTexto) {
    cadenaDeTexto = String(cadenaDeTexto).trim();  
    const regxs = {
        "minusculas": /^[a-z0-9 ]+$/,
        "mayusculas": /^[A-Z0-9 ]+$/,
        "mezclado": /^[A-Za-z0-9 ]+$/,
        "acentos": /^[a-zA-Z\u00C0-\u017F]+$/,
        "caracteres": /(?=(?:.*[:! " # $ % & ' ( ) * + , \ -. / : ; < = > ? @^ _ ` { |  ]){1})/
    }
    
    if (regxs.minusculas.test(cadenaDeTexto)) return '0';
    if (regxs.mayusculas.test(cadenaDeTexto)) return '1';
    if (regxs.mezclado.test(cadenaDeTexto)) return '2';
    if (regxs.acentos.test(cadenaDeTexto)) return '3';
    if (regxs.caracteres.test(cadenaDeTexto)) return '4';
    return -1;
}

/*------------encriptar-----------*/

function encriptarTexto() {
    const inputTexto = document.querySelector('.input').value;
    if(inputTexto == ''){
        resultado.innerHTML = '';
        advice.style.color = "red";
        advice.innerHTML = "No se ha colocado ningún texto";
        setTimeout(() => {
            advice.style.color = "black";
            advice.textContent = 'Sólo letras minúsculas, no utilizar caracteres especiales ni acentos.';
        }, 3000);
    }
    if (corroborarCaracteres(inputTexto) == '0'){
        let textoEncriptado = inputTexto.replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
        resultado.innerHTML = textoEncriptado;
    }
    if (corroborarCaracteres(inputTexto) == '1' || corroborarCaracteres(inputTexto) == '2'){
        resultado.innerHTML = "El texto ingresado posee una mayúscula";
    }
    if (corroborarCaracteres(inputTexto) == '3'){
        resultado.innerHTML = "El texto ingresado posee acentos";
    }
    if (corroborarCaracteres(inputTexto) == '4'){
        resultado.innerHTML = "El texto ingresado posee una caracteres especiales";
    }
};

/*-----------desencriptar----------*/

function desencriptarTexto() {
    const inputTexto = document.querySelector('.input').value;
    if (corroborarCaracteres(inputTexto) == '0'){
        let textoDesencriptado = inputTexto.replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
        resultado.innerHTML = textoDesencriptado;
    }
    if (corroborarCaracteres(inputTexto) == '1' || corroborarCaracteres(inputTexto) == '2'){
        resultado.innerHTML = "El texto ingresado posee una mayúscula";
    }
    if (corroborarCaracteres(inputTexto) == '3'){
        resultado.innerHTML = "El texto ingresado posee una acentos";
    }
    if (corroborarCaracteres(inputTexto) == '4'){
        resultado.innerHTML = "El texto ingresado posee una caracteres especiales";
    }
};

/*------------copiar texto-----------*/