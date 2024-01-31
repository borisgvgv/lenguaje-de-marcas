function calcularPrecioFinal(
  producto = "Producto genérico",
  precio = 100,
  impuesto = 21
) {
  // Convertir el nombre de producto a string y los otros dos a número
  producto = String(producto);
  precio = Number(precio);
  impuesto = Number(impuesto);

  // Verificar si el precio y el impuesto son números válidos
  if (isNaN(precio) || isNaN(impuesto)) {
    console.error(`Error: En el producto ${producto} El precio o el impuesto no son válidos`);
    return;
  }

  //Calcular precio final
  const presioFinal = precio + (precio * impuesto) / 100;

  //Mostrar por consola el nombre del producto y si precio final
  console.log(`Producto: ${producto}`);
  console.log(`Precio final: ${presioFinal}`);
}

//Pedir datos al usuario

let producto = prompt("Introduce un nombre de producto");
let precio = prompt("Introduce un precio del producto");
let impuesto = prompt("Introduce el impuesto a aplicar");

//Llamada a la función
calcularPrecioFinal(); // Utiliza los valores por defecto
calcularPrecioFinal(producto, precio, impuesto);



/*
function calcularPrecioFinal(nombreProducto = "Producto genérico", precio = 100, impuesto = 21) {

  // Convertir el nombre de producto a string y los otros dos a número
  nombreProducto = String(nombreProducto);
  precio = Number(precio);
  impuesto = Number(impuesto);

  // Verificar si el precio y el impuesto son números válidos
  if (isNaN(precio) || isNaN(impuesto)) {
    console.error("Error: El precio o el impuesto no son números válidos.");
    return;
  }

  // Calcular el precio final contando impuestos
  const precioFinal = precio + (precio * impuesto / 100);

  // Mostrar por consola el nombre del producto y el precio final
  console.log(`Producto: ${nombreProducto}`);
  console.log(`Precio final (con impuestos): ${precioFinal}`);
}

// Llamar a la función varias veces con diferentes combinaciones de parámetros
calcularPrecioFinal();  // Utiliza los valores por defecto
calcularPrecioFinal("Producto 1", 150, 18);
calcularPrecioFinal("Producto 2", "No es un número", 15);  // Pasa un valor no numérico en el precio
calcularPrecioFinal("Producto 3", 200, "No es un número");  // Pasa un valor no numérico en el impuesto

*/
