// ==============================
// LISTA DE REGALOS (código base)
// ==============================
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

/**
 * Función recursiva para buscar un regalo en la lista
 * @param {Array} gifts - Lista de regalos
 * @param {string} giftName - Regalo a buscar
 * @param {number} index - Índice actual (por defecto inicia en 0)
 * @returns {string} Resultado de la búsqueda
 */
function findGift(gifts, giftName, index = 0) {

    // =========================
    // CASO BASE 1:
    // Si llegamos al final del arreglo
    // =========================
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }

    // =========================
    // CASO BASE 2:
    // Si encontramos el regalo
    // =========================
    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    }

    // =========================
    // LLAMADA RECURSIVA
    // Avanza al siguiente elemento
    // =========================
    return findGift(gifts, giftName, index + 1);
}

// ==============================
// PRUEBAS (EJECUCIÓN)
// ==============================

// Caso donde sí existe
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));
// Salida esperada: "Lego está en la posición 3."

// Caso donde NO existe
giftToFind = "Camión";
console.log(findGift(gifts, giftToFind));
// Salida esperada: "Camión no está en la lista."