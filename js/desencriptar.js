const btnDesencriptar = document.querySelector('#btn_desencriptar');

btnDesencriptar.addEventListener('click', desencriptarTexto);

function desencriptarTexto() {
    const inputTexto = textarea.value;
    if(inputTexto == ''){
        mostrarBloqueDerecho()
        resultado.innerHTML = '';
        textarea.classList.add('color-red')
        textarea.placeholder='No se ha colocado ningún texto';
        setTimeout(() => {
            textarea.classList.remove('color-red')
            textarea.placeholder='Ingrese el texto aquí';
        }, 3000);
    }
    if (corroborarCaracteres(inputTexto) == '0'){
        let textoDesencriptado = inputTexto.replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
        ocultarBloqueDerecho()
        resultado.innerHTML = textoDesencriptado;
    }
    if (corroborarCaracteres(inputTexto) == '1' || corroborarCaracteres(inputTexto) == '2'){
        resultado.innerHTML = "El texto ingresado posee una mayúscula";
        setTimeout(() => {
            mostrarBloqueDerecho()
            resultado.innerHTML = '';
        }, 3000);
    }
    if (corroborarCaracteres(inputTexto) == '3'){
        resultado.innerHTML = "El texto ingresado posee una acentos";
        setTimeout(() => {
            mostrarBloqueDerecho()
            resultado.innerHTML = '';
        }, 3000);
    }
    if (corroborarCaracteres(inputTexto) == '4'){
        resultado.innerHTML = "El texto ingresado posee una caracteres especiales";
        setTimeout(() => {
            mostrarBloqueDerecho()
            resultado.innerHTML = '';
        }, 3000);
    }
};