// Contenedor donde se mostrarán los pedidos
const ordersContainer = document.getElementById("ordersContainer");

// Botón para agregar pedidos
const addOrderBtn = document.getElementById("addOrderBtn");

// Contador de pedidos
let orderId = 1;

/**
 * Crear un nuevo pedido
 */
function createOrder() {

  // Crear objeto del pedido
  const order = {
    id: orderId++,
    status: "En Proceso"
  };

  // Mostrar pedido en pantalla
  renderOrder(order);

  // Procesar pedido de forma asíncrona
  processOrder(order);
}

/**
 * Mostrar pedido en la interfaz
 */
function renderOrder(order) {

  // Crear elemento HTML
  const orderElement = document.createElement("div");

  orderElement.classList.add("order");
  orderElement.classList.add(
    order.status === "Completado"
      ? "completed"
      : "processing"
  );

  // ID único para actualizar después
  orderElement.id = `order-${order.id}`;

  orderElement.innerHTML = `
    <h3>Pedido #${order.id}</h3>
    <p>Estado: ${order.status}</p>
  `;

  // Si ya existe, actualizar
  const existingOrder = document.getElementById(`order-${order.id}`);

  if (existingOrder) {
    existingOrder.replaceWith(orderElement);
  } else {
    ordersContainer.appendChild(orderElement);
  }
}

/**
 * Simular preparación usando Promise + setTimeout
 */
function prepareOrder(order) {

  return new Promise((resolve) => {

    // Tiempo aleatorio entre 2 y 5 segundos
    const preparationTime =
      Math.floor(Math.random() * 3000) + 2000;

    console.log(
      `Preparando pedido #${order.id}...`
    );

    // Simulación asíncrona
    setTimeout(() => {

      resolve();

    }, preparationTime);

  });
}

/**
 * Procesar pedido usando async/await
 */
async function processOrder(order) {

  // Esperar a que termine la preparación
  await prepareOrder(order);

  // Cambiar estado
  order.status = "Completado";

  // Actualizar interfaz
  renderOrder(order);

  console.log(
    `Pedido #${order.id} completado`
  );
}

// Evento del botón
addOrderBtn.addEventListener(
  "click",
  createOrder
);