// ===============================
// INVENTARIO DE LIBROS (JSON)
// ===============================

let biblioteca = [
  {
    titulo: "Cien Años de Soledad",
    autor: "Gabriel García Márquez",
    genero: "Realismo Mágico",
    disponible: true
  },
  {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    genero: "Fábula",
    disponible: true
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    genero: "Ciencia Ficción",
    disponible: false
  }
];

// ===============================
// SIMULAR LECTURA ASÍNCRONA
// ===============================

function leerDatos(callback) {

  console.log("Leyendo datos de la biblioteca...");

  setTimeout(() => {

    callback(biblioteca);

  }, 2000);
}

// ===============================
// MOSTRAR LIBROS
// ===============================

function mostrarLibros() {

  leerDatos((libros) => {

    console.log("\n=== INVENTARIO DE LIBROS ===");

    libros.forEach((libro, index) => {

      console.log(`
Libro #${index + 1}
Título: ${libro.titulo}
Autor: ${libro.autor}
Género: ${libro.genero}
Disponible: ${libro.disponible ? "Sí" : "No"}
      `);

    });

  });
}

// ===============================
// AGREGAR LIBRO
// ===============================

function agregarLibro(
  titulo,
  autor,
  genero
) {

  const nuevoLibro = {
    titulo,
    autor,
    genero,
    disponible: true
  };

  escribirDatos(() => {

    biblioteca.push(nuevoLibro);

    console.log(`
Libro agregado:
${titulo}
    `);

  });
}

// ===============================
// ACTUALIZAR DISPONIBILIDAD
// ===============================

function actualizarDisponibilidad(
  titulo,
  estado
) {

  escribirDatos(() => {

    const libro = biblioteca.find(
      libro => libro.titulo === titulo
    );

    if (libro) {

      libro.disponible = estado;

      console.log(`
Disponibilidad actualizada:
${titulo} -> ${
  estado ? "Disponible" : "Prestado"
}
      `);

    } else {

      console.log(
        "Libro no encontrado"
      );

    }

  });
}

// ===============================
// SIMULAR ESCRITURA ASÍNCRONA
// ===============================

function escribirDatos(callback) {

  console.log(
    "Guardando cambios..."
  );

  setTimeout(() => {

    callback();

  }, 1500);
}

// ===============================
// PRUEBAS DEL SISTEMA
// ===============================

// Mostrar libros iniciales
mostrarLibros();

// Agregar nuevo libro
setTimeout(() => {

  agregarLibro(
    "Don Quijote de la Mancha",
    "Miguel de Cervantes",
    "Novela"
  );

}, 3000);

// Cambiar disponibilidad
setTimeout(() => {

  actualizarDisponibilidad(
    "El Principito",
    false
  );

}, 6000);

// Mostrar inventario actualizado
setTimeout(() => {

  mostrarLibros();

}, 9000);