// arreglo de productos
const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" }
];


// 1. Filtrar productos menores a $100
const productosBaratos = productos.filter(producto => producto.precio < 100);

console.log("Productos menores a $100:");
console.log(productosBaratos);


// 2. Ordenar alfabéticamente por nombre
const productosOrdenados = productosBaratos.sort((a, b) => 
    a.nombre.localeCompare(b.nombre)
);

console.log("Productos ordenados:");
console.log(productosOrdenados);


// 3. Obtener solo los nombres
const nombresProductos = productosOrdenados.map(producto => producto.nombre);

console.log("Nombres de productos:");
console.log(nombresProductos);



// 4. Verificar si hay productos caros (más de $500)
const hayCaros = productos.some(producto => producto.precio > 500);

console.log("¿Hay productos caros?:", hayCaros);


// 5. Calcular el total de precios (reduce)
const total = productos.reduce((acumulador, producto) => 
    acumulador + producto.precio, 0
);

console.log("Total de todos los productos:", total);