// arreglo vacío
let listaDeCompras = [];

// agregar producto
const agregarProducto = (producto) => {

    // convertir a minúsculas para evitar duplicados
    producto = producto.toLowerCase();

    if(!listaDeCompras.includes(producto)){
        listaDeCompras.push(producto);
        console.log(`${producto} agregado a la lista`);
    }else{
        console.log("El producto ya está en la lista");
    }

};

// eliminar producto
const eliminarProducto = (producto) => {

    const index = listaDeCompras.indexOf(producto.toLowerCase());

    if(index !== -1){
        listaDeCompras.splice(index,1);
        console.log(`${producto} eliminado de la lista`);
    }else{
        console.log("El producto no existe en la lista");
    }

};

// mostrar lista
const mostrarLista = () => {

    console.log("Lista de compras:");

    listaDeCompras.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto}`);
    });

};


// pruebas
agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("Huevos");

mostrarLista();

eliminarProducto("Pan");

mostrarLista();