// Variable global para almacenar los libros leídos
let librosLeidos = [];

// Función para agregar un libro al arreglo
function agregarLibro(titulo) {
    librosLeidos.push(titulo);
    console.log("Libro agregado: " + titulo);
}

// Función para mostrar todos los libros leídos
function mostrarLibrosLeidos() {
    console.log("Lista de libros leídos:");

    if (librosLeidos.length === 0) {
        console.log("Aún no has agregado libros.");
    } else {
        for (let i = 0; i < librosLeidos.length; i++) {
            console.log((i + 1) + ". " + librosLeidos[i]);
        }
    }
}

// Pruebas del sistema
agregarLibro("Cien años de soledad");
agregarLibro("El principito");
agregarLibro("1984");

mostrarLibrosLeidos();
