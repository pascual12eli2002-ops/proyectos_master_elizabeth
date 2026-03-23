const findLongestWord = (texto) => {

    // dividir el texto en palabras
    const palabras = texto.split(" ");

    let palabraMasLarga = "";

    // recorrer las palabras (ventana deslizante de 1 en 1)
    for (let i = 0; i < palabras.length; i++) {

        // limpiar signos como puntos o comas 
        const palabra = palabras[i].replace(/[.,!?]/g, "");

        // comparar longitud
        if (palabra.length > palabraMasLarga.length) {
            palabraMasLarga = palabra;
        }
    }

    // retornar resultado
    return palabraMasLarga;
};


// Ejemplo de uso
const texto = "JavaScript es un lenguaje de programación increíble para aprender en ciberseguridad.";

console.log(findLongestWord(texto));