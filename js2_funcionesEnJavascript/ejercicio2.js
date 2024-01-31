"use strict";
/*
Crea una función que reciba un array y un valor, e indique si
dicho valor se encuentra en el array o no. Si existe en el array,
devolverá la posición del elemento, si no existe devolverá -1.

• Realiza una función que reciba un array numérico y te indique
si TODOS sus valores son pares.

• Realiza una función que reciba un array numérico y te indique
si ALGUNOS de sus valores son pares.
*/

let array = [2, 8, 4, 6];
let numero = 9;

function comprobarValor(array, numero) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  console.log(numero);

  let contador = 0;
  for (let dato of array) {
    contador++; // aquí el contador empieza en 1
    if (dato == numero) {
      return `El numero ${numero} está en la posición ${contador}`;
    } else {
      return -1;
    }
    //contador++; // aquí el contador empieza en 0
  }
}

let sentencia = comprobarValor(array, numero);
console.log(`Sentencia: ${sentencia}`);

//Función para comprobar si los número del array son pares o impares
function comprobarPares(array) {
  let parImpar = false;
  for (let dato of array) {
      if (dato % 2 == 0) {
        parImpar = true;
      } else {
        return "impar";
      }
  }

  if ((parImpar = true)) {
    return "par";
  } 
}
//llamada a la función comprobarPares
console.log(comprobarPares(array));
