// Seleccionar elementos del DOM
const inputComentario = document.getElementById("comentarioInput");
const botonAgregar = document.getElementById("btnAgregar");
const listaComentarios = document.getElementById("listaComentarios");

// Evento click
botonAgregar.addEventListener("click", function () {

    let texto = inputComentario.value.trim();

    if (texto === "") {
        alert("Por favor escribe un comentario.");
        return;
    }

    // Crear contenedor del comentario
    const nuevoComentario = document.createElement("div");
    nuevoComentario.classList.add("comentario");

    // Fecha y hora
    const fecha = new Date();
    const fechaTexto = fecha.toLocaleString();

    // Crear contenido
    nuevoComentario.innerHTML = `
        <p>${texto}</p>
        <span class="fecha">Publicado el: ${fechaTexto}</span>
        <br>
        <button class="eliminar">Eliminar</button>
    `;

    // Evento para eliminar comentario
    nuevoComentario.querySelector(".eliminar").addEventListener("click", function () {
        nuevoComentario.remove();
    });

    // Agregar comentario al DOM
    listaComentarios.appendChild(nuevoComentario);

    // Limpiar textarea
    inputComentario.value = "";
});