// Declarar el arreglo con diferentes frutas
let frutas = ["manzana", "pera", "manzana", "naranja", "pera", "manzana", "kiwi", "naranja"];

// Crear un objeto para almacenar la cantidad de cada tipo
let conteoFrutas = {};

// Recorrer el arreglo con un ciclo for
for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];

    // Si la fruta ya existe en el objeto, aumentar el contador
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        // Si no existe, agregar con valor 1
        conteoFrutas[fruta] = 1;
    }
}

// Imprimir el resultado en consola
console.log("Conteo de frutas con ciclo FOR:");
for (let tipo in conteoFrutas) {
    console.log(tipo + ": " + conteoFrutas[tipo]);
}



// Declarar el arreglo con diferentes frutas
let frutas2 = ["manzana", "pera", "manzana", "naranja", "pera", "manzana", "kiwi", "naranja"];

// Crear un objeto para almacenar la cantidad
let conteoFrutas2 = {};

let i = 0;

// Recorremos el arreglo con ciclo while
while (i < frutas2.length) {
    let fruta = frutas2[i];

    if (conteoFrutas2[fruta]) {
        conteoFrutas2[fruta]++;
    } else {
        conteoFrutas2[fruta] = 1;
    }

    i++;
}

// Imprimir el resultado
console.log("Conteo de frutas con ciclo WHILE:");
for (let tipo in conteoFrutas2) {
    console.log(tipo + ": " + conteoFrutas2[tipo]);
}
