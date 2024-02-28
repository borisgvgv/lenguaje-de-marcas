/*
Crea una función que reciba un array como parámetro y
devuelva cierto si todos los elementos son pares y falso en
caso contrario.
• Además, la función recibirá un segundo parámetro booleano
para indicar si quieres verificar números pares o impares. El
valor por defecto de este parámetro será que verifique
números pares.
• Debes usar every
*/

let a = [2, 4, 6, 8]
let b = prompt("Introduce un p (pares) o i(impares)valor")

let comprobarPares = function(a, b) {

  if (b == "p") {
    return a.every(function(a) {
      return a % 2 == 0;
    });
  }
  if (b == "i") {
    return a.some(function(a) {
      return a % 2 != 0;
    });
  }


}

console.log(comprobarPares(a, b));