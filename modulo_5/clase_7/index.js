const planetas = require("./planetas");

console.log("🌍 Exploración Espacial 🌍\n");

planetas.forEach((planeta) => {

  console.log(
    `Planeta: ${planeta.nombre}`
  );

  console.log(
    `Descripción: ${planeta.descripcion}`
  );

  console.log(
    `Descubierto en: ${planeta.descubiertoEn}`
  );

  console.log("----------------------");

});