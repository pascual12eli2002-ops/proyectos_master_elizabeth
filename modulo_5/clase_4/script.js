// ==============================
// SISTEMA DE RESERVAS
// ==============================

// Simulando una base de datos de mesas
const mesasDisponibles = 5;

// -----------------------------------
// Función para verificar disponibilidad
// -----------------------------------
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      // Verificar si hay suficientes mesas
      if (mesasSolicitadas <= mesasDisponibles) {
        resolve("Mesas disponibles.");
      } else {
        reject("No hay suficientes mesas disponibles.");
      }

    }, 2000);
  });
}

// -----------------------------------
// Función para enviar correo
// -----------------------------------
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      // Simular éxito o error del correo
      const envioExitoso = Math.random() > 0.3;

      if (envioExitoso) {
        resolve(
          `Correo de confirmación enviado a ${nombreCliente}.`
        );
      } else {
        reject(
          "Error al enviar el correo de confirmación."
        );
      }

    }, 1500);
  });
}

// -----------------------------------
// Función principal
// -----------------------------------
async function hacerReserva(nombreCliente, mesasSolicitadas) {

  try {

    console.log("Verificando disponibilidad de mesas...");

    // Esperar verificación
    const disponibilidad =
      await verificarDisponibilidad(mesasSolicitadas);

    console.log(disponibilidad);

    console.log(
      `Reserva confirmada para ${nombreCliente}.`
    );

    // Esperar confirmación de correo
    const confirmacion =
      await enviarConfirmacionReserva(nombreCliente);

    console.log(confirmacion);

  } catch (error) {

    console.log("Error:", error);

  }
}

// -----------------------------------
// Llamadas de prueba
// -----------------------------------

// Reserva válida
hacerReserva("Juan Pérez", 3);

// Reserva inválida
hacerReserva("María López", 8);