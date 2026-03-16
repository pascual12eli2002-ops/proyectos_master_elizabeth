// arreglo de viajes
const viajes = [];

// función para calcular costo
export const calcularCosto = (destino, transporte) => {

    let costo = 0;

    if(destino === "Cancun"){
        costo = 5000;
    }
    else if(destino === "Paris"){
        costo = 15000;
    }
    else if(destino === "Tokyo"){
        costo = 20000;
    }

    if(transporte === "avion"){
        costo += 3000;
    }

    if(transporte === "autobus"){
        costo += 1000;
    }

    return costo;
};


// registrar destino
export const registrarDestino = (destino, fecha, transporte) => {

    const costo = calcularCosto(destino, transporte);

    const viaje = {
        destino,
        fecha,
        transporte,
        costo
    };

    viajes.push(viaje);
};


// mostrar itinerario
export const mostrarItinerario = () => {

    return viajes;
};