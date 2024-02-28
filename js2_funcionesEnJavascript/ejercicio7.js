/*
Crea una función que reciba un array de strings y lo devuelva
ordenado alfabéticamente, de forma ascendente o
descendente, en función de un segundo parámetro que
recibirá la función para indicar el tipo de ordenación.
*/

let a = ["Bertha", "Yaisa", "Mónica", "José Vicente", "Ana", "Boris"];
document.write(a);
let b = prompt(`Ingresa "o" para ordenar o "r"para invertirla`);


let ordenar = function(a, b) {
  if (b == "o") {
	a.sort();
	return a.join(", ");
  } else if (b == "r") {
	a.sort();
	a = a.reverse();
	return a.join(", ");
  }
}

console.log(ordenar(a,b));
