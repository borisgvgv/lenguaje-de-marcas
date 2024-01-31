/*
Ejercicio 12
• Escribe un script que le pida una cadena de texto al usuario y
la muestre al revés en la página.
• Para obtener la longitud de una cadena, puedes utilizar la
propiedad length del objeto String
• Para obtener el carácter de la posición i de una cadena,
puedes utilizar el método charAt del objeto string
• Para más información puedes consultar el siguiente enlace:
• https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String
*/

let nombreInverso_1 = "";
let nombreInverso_2 = "";
let texto = prompt("introduce un texto");
console.log("El nombre introducido es: " + texto);

for (let i = texto.length-1; i >= 0; i--) {
   nombreInverso_1 += texto.charAt(i); //forma con texto.CharAt(índice)
 }

console.log("Texto al revés");
for (let i = texto.length-1; i >= 0; i--) {
  nombreInverso_2 += texto[i]; //forma directa texto.[indice]
}


 

console.log(nombreInverso_1);
console.log(nombreInverso_2);
