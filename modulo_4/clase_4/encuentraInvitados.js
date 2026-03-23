const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

const encontrarPareja = (arr) => {

    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {

        // obtener iniciales
        const inicial1 = arr[inicio][0];
        const inicial2 = arr[siguiente][0];

        // comparar iniciales
        if (inicial1 === inicial2) {
            return [arr[inicio], arr[siguiente]];
        }

        // avanzar punteros
        inicio++;
        siguiente++;
    }

    return null; // si no encuentra pareja
};

console.log(encontrarPareja(invitados));