import { registrarDestino, mostrarItinerario } from "./viajes.js";

const formulario = document.getElementById("formViaje");
const contenedor = document.getElementById("itinerario");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    const destino = document.getElementById("destino").value;
    const fecha = document.getElementById("fecha").value;
    const transporte = document.getElementById("transporte").value;

    registrarDestino(destino, fecha, transporte);

    actualizarItinerario();

});

const actualizarItinerario = () => {

    contenedor.innerHTML = "";

    const viajes = mostrarItinerario();

    viajes.forEach(viaje => {

        const div = document.createElement("div");
        div.classList.add("viaje");

        div.innerHTML = `
        <p><strong>Destino:</strong> ${viaje.destino}</p>
        <p><strong>Fecha:</strong> ${viaje.fecha}</p>
        <p><strong>Transporte:</strong> ${viaje.transporte}</p>
        <p><strong>Costo:</strong> $${viaje.costo}</p>
        `;

        contenedor.appendChild(div);

    });

};