"use strict";
/*
Crea un script (usando al menos 1 función) en el que se le pida al usuario 2
datos:
• El primero será dos números del 1 al 10 (debes dar error en otro caso)
• El segundo será el modo de visualización: LISTA o TABLA (debe dar error si elige
otra cosa)
• El programa mostrará la tabla de multiplicar del número más pequeño, llegando
hasta el número más grande
• Ojo, tendrás que tener en cuenta que el usuario puede ponerte el segundo
número más pequeño que el primero.
• Ejemplo, si el usuario introduce los número 2 y 4, el resultado de la página será el
siguiente
*/

function mostrarTablaoLista(n1, n2, modo) {
  if (isNaN(n1) || isNaN(n2)) {
    document.write("Error al introducir algúno de los datos");
  }

  let mayor, menor;
  if (n1 > n2) {
    mayor = n1;
    menor = n2;
    n1 = menor;
    n2 = mayor;
  }

  if ((modo.toUpperCase() == "Lista".toUpperCase())||(modo.toUpperCase() == "List".toUpperCase())) {
    document.write("<ul>");

    for (let i = 1; i <= n2; i++) {
      document.write("<li>");
      document.write(n1 + " * " + i + " = " + n1 * i);
      document.write("</li>");
    }
    document.write("</ul>");
  }

  else if ((modo.toUpperCase() == "Tabla".toUpperCase())||(modo.toUpperCase() == "Table".toUpperCase())){

    document.write("<table border=1>")

    for (let i = 1;i <= n2;i++) {
        document.write("<tr>");
        document.write("<td>" + n1 + " x " + i + "</td><td> = </td><td>" + (n1 * i) + "</td>");
        document.write("</tr>");
    }

    document.write("</table>")
  }
  else{
    document.write("Error en el modo")
  }
}

let num1 = prompt("Introduce un número: ");
let num2 = prompt("Introduce otro número: ");
let modo = prompt("¿Tabla o Lista? ");

mostrarTablaoLista(num1, num2, modo);
