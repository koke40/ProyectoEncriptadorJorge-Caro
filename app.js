
const entradaTexto = document.getElementById("entradaTexto"); // Campo de  texto
const resultado = document.getElementById("resultado"); // Campo de resultado

// Función para encriptar el texto
function encriptar() {
    const texto = entradaTexto.value; // Obtener el texto ingresado por el usuario
    
    console.log("Se ingresó el siguiente texto: ", texto); // muestra el texto ingresado en la consola solamente para probar dentro de los test locales

    //Verificar si el campo de texto está vacío
    if (!texto.trim()) {
        alert("El campo de texto está vacío.");
        return;
    }

    // Verificacion de texto contiene mayúsculas o tildes
    const mayusculasTildes = /[A-ZÁÉÍÓÚáéíóú]/;
    if (mayusculasTildes.test(texto)) {
        alert("No se permiten el uso de mayúsculas y/o los caracteres acentuados");
        return;
    }

    const letraÑ = /[Ññ]/;
    if (letraÑ.test(texto)) {
        alert("No se permite la letra ñ o Ñ");
        return;
    }

    // Encriptación del texto ingresado
    const encriptacion = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    // Mostrar el texto encriptado en el área de resultado
    resultado.value = encriptacion;

    // Ocultar el placeholder y mostrar el resultado y botón de copiar
    document.getElementById("placeholder").style.display = "none";
    resultado.style.display = "block";
    document.getElementById("btnCopiar").style.display = "block";
}

// Función para desencriptar el texto
function desencriptar() {
    const textoEncriptado = entradaTexto.value; // Obtener el texto encriptado ingresado por el usuario
    
    console.log("Se ingresó el siguiente texto: ", textoEncriptado); // Para depuración: muestra el texto encriptado en la consola

    // Desencriptación del texto ingresado
    const desencriptacion = textoEncriptado
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');


    resultado.value = desencriptacion;

    document.getElementById("placeholder").style.display = "none";
    resultado.style.display = "block";
    document.getElementById("btnCopiar").style.display = "block";
}

// Función para copiar el texto encriptado/desencriptado al portapapeles
function copiar() {
    resultado.select(); 
    document.execCommand("copy"); 
    alert("Texto copiado al portapapeles"); 
}

// Evento para detectar cuando el campo de entrada está vacío
entradaTexto.addEventListener("input", function () {
    if (entradaTexto.value.trim() === "") {
        placeholder.style.display = "flex";
        resultado.style.display = "none";
        btnCopiar.style.display = "none";
    }
});