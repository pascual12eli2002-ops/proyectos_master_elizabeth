// Crear objeto libro usando sintaxis literal
const libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
    estado: "disponible",
    capitulos: [],

    // Método para describir el libro
    describirLibro: function() {
        console.log("Libro titulado '" + this.titulo +
        "', escrito por " + this.autor +
        " en el año " + this.anio +
        ", el estado es: " + this.estado + ".");
    },

    // Método para agregar capítulo
    agregarCapitulo: function(capitulo) {
        this.capitulos.push(capitulo);
        console.log("Capítulo agregado: " + capitulo);
    },

    // Método para eliminar capítulo
    eliminarCapitulo: function(capitulo) {
        const indice = this.capitulos.indexOf(capitulo);

        if (indice !== -1) {
            this.capitulos.splice(indice, 1);
            console.log("Capítulo eliminado: " + capitulo);
        } else {
            console.log("El capítulo no existe.");
        }
    }
};

// Pruebas del objeto
libro.describirLibro();

libro.agregarCapitulo("Capítulo 1: La familia Buendía");
libro.agregarCapitulo("Capítulo 2: Macondo");

console.log("Lista de capítulos:", libro.capitulos);

libro.eliminarCapitulo("Capítulo 1: La familia Buendía");

console.log("Lista actualizada de capítulos:", libro.capitulos);
