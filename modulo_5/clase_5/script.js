document.getElementById("registroEvento")
.addEventListener("submit", function(event) {

  event.preventDefault();

  // Variables
  const nombre =
    document.getElementById("nombre").value.trim();

  const correo =
    document.getElementById("correo").value.trim();

  const telefono =
    document.getElementById("telefono").value.trim();

  const intereses =
    document.querySelectorAll(
      'input[name="intereses"]:checked'
    );

  const horario =
    document.querySelector(
      'input[name="horario"]:checked'
    );

  const fecha =
    document.getElementById("fecha").value;

  // Validaciones básicas
  if (
    !nombre ||
    !correo ||
    !telefono ||
    intereses.length === 0 ||
    !horario ||
    !fecha
  ) {
    alert(
      "Por favor, completa todos los campos obligatorios."
    );
    return;
  }

  // Validación 1:
  // El nombre no debe contener números
  const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;

  if (!nombreRegex.test(nombre)) {
    alert(
      "El nombre no debe contener números."
    );
    return;
  }

  // Validación 2:
  // Correo válido
  if (!correo.includes("@")) {
    alert(
      "Ingresa un correo electrónico válido."
    );
    return;
  }

  // Validación 3:
  // Teléfono de 10 dígitos
  if (telefono.length !== 10) {
    alert(
      "El teléfono debe contener 10 dígitos."
    );
    return;
  }

  // Si todo está correcto
  alert(
    "Registro exitoso. ¡Gracias por registrarte!"
  );

});
