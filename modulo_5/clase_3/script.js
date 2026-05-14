// ==============================
// CONTENEDOR DE DATOS
// ==============================

const container =
  document.getElementById(
    "data-container"
  );

// ==============================
// MOSTRAR PERSONAJES
// ==============================

function mostrarPersonajes(
  personajes
) {

  // Limpiar contenido previo
  container.innerHTML = "";

  personajes.forEach(personaje => {

    const card =
      document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
      <img src="${personaje.image}" alt="${personaje.name}">
      <h3>${personaje.name}</h3>
      <p><strong>Estado:</strong> ${personaje.status}</p>
      <p><strong>Especie:</strong> ${personaje.species}</p>
    `;

    container.appendChild(card);

  });

}

// ==============================
// OBTENER DATOS CON FETCH
// ==============================

async function obtenerConFetch() {

  try {

    const response = await fetch(
      "https://rickandmortyapi.com/api/character"
    );

    const data =
      await response.json();

    mostrarPersonajes(
      data.results
    );

  } catch (error) {

    console.log(
      "Error con Fetch:",
      error
    );

  }

}

// ==============================
// OBTENER DATOS CON AXIOS
// ==============================

async function obtenerConAxios() {

  try {

    const response =
      await axios.get(
        "https://rickandmortyapi.com/api/character"
      );

    mostrarPersonajes(
      response.data.results
    );

  } catch (error) {

    console.log(
      "Error con Axios:",
      error
    );

  }

}

// ==============================
// EVENTOS DE BOTONES
// ==============================

document
  .getElementById("fetch-btn")
  .addEventListener(
    "click",
    obtenerConFetch
  );

document
  .getElementById("axios-btn")
  .addEventListener(
    "click",
    obtenerConAxios
  );