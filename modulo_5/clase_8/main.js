import "./style.css";

// Número aleatorio
const numeroSecreto =
  Math.floor(Math.random() * 100) + 1;

// Elementos
const inputNumero =
  document.getElementById("numero");

const botonAdivinar =
  document.getElementById("adivinar");

const mensaje =
  document.getElementById("mensaje");

// Evento click
botonAdivinar.addEventListener(
  "click",
  () => {

    const numeroJugador =
      parseInt(inputNumero.value);

    // Validación
    if (
      isNaN(numeroJugador) ||
      numeroJugador < 1 ||
      numeroJugador > 100
    ) {

      mensaje.textContent =
        "Ingresa un número válido del 1 al 100.";

    }

    // Número correcto
    else if (
      numeroJugador === numeroSecreto
    ) {

      mensaje.textContent =
        "🎉 ¡Adivinaste el número!";

    }

    // Número menor
    else if (
      numeroJugador < numeroSecreto
    ) {

      mensaje.textContent =
        "📈 El número es más alto.";

    }

    // Número mayor
    else {

      mensaje.textContent =
        "📉 El número es más bajo.";

    }

  }
);