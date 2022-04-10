const textarea = document.querySelector('#inputText');
const resultado = document.querySelector('#resultado');
const cajaDerecha = document.querySelector('.hero_rb');
const btnEncripar = document.querySelector('#btn_encriptar');
const btnCopiar = document.querySelector('.btn_copiar');

btnCopiar.addEventListener('click', () => {
    resultado.select()
    document.execCommand('copy')
    btnCopiar.style.color = "#90EE90"
    btnCopiar.textContent = "Copiado!"
    setTimeout(() => {
        btnCopiar.style.color = "var(--azul-principal)"
        btnCopiar.textContent = "Copiar"
    }, 1500);
})


btnEncripar.addEventListener('click', encriptarTexto);

function encriptarTexto() {
    const inputTexto = textarea.value;
    if(inputTexto == ''){
        mostrarBloqueDerecho()
        resultado.style.display = 'none';
        resultado.innerHTML = '';
        textarea.classList.add('color-red')
        textarea.placeholder='No se ha colocado ningún texto';
        setTimeout(() => {
            textarea.classList.remove('color-red')
            textarea.placeholder='Ingrese el texto aquí';
        }, 3000);
    }
    if (corroborarCaracteres(inputTexto) == '0'){
        let textoEncriptado = inputTexto.replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
        ocultarBloqueDerecho()
        resultado.style.display = 'block';
        resultado.innerHTML = textoEncriptado;
    }
    if (corroborarCaracteres(inputTexto) == '1' || corroborarCaracteres(inputTexto) == '2'){
        ocultarBloqueDerecho()
        resultado.innerHTML = "El texto ingresado posee una mayúscula";
        setTimeout(() => {
            mostrarBloqueDerecho()
            resultado.innerHTML = '';
        }, 3000);

    }
    if (corroborarCaracteres(inputTexto) == '3'){
        ocultarBloqueDerecho()
        resultado.innerHTML = "El texto ingresado posee acentos";
        setTimeout(() => {
            mostrarBloqueDerecho()
            resultado.innerHTML = '';
        }, 3000);
    }
    if (corroborarCaracteres(inputTexto) == '4'){
        ocultarBloqueDerecho()
        resultado.innerHTML = "El texto ingresado posee una caracteres especiales";
        setTimeout(() => {
            mostrarBloqueDerecho()
            resultado.innerHTML = '';
        }, 3000);                                                                           
    }
};

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

function ocultarBloqueDerecho(){
    cajaDerecha.childNodes[1].style.display = "none" // oculto img
    cajaDerecha.childNodes[3].style.display = "none" // oculto h2
    cajaDerecha.childNodes[5].style.display = "none" // oculto h4
    btnCopiar.style.display = "block" // hago visible el boton copiar
    cajaDerecha.style.justifyContent = "space-between"
}

function mostrarBloqueDerecho(){
    cajaDerecha.style.justifyContent = "center"
    cajaDerecha.childNodes[1].style.display = "block" // hago visible img
    cajaDerecha.childNodes[3].style.display = "block" // hago visible h2
    cajaDerecha.childNodes[5].style.display = "block" // hago visible h4
    btnCopiar.style.display = "none" // oculto el boton copiar
}