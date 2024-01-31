/*
Ejercicio 11
Amplia el ejercicio 10-2 de forma que cuando el usuario
indique que no quiere introducir más notas se muestre por
consola la nota media, la nota mínima y la nota máxima de
todas las notas introducidas.
*/

let respuesta;
let notas = [];
let suma = 0;
let notaMaxima = -1;
let notaMinima = 11;

do {
    let nota = Number(prompt("Introduzca la nota: "));

    if (isNaN(nota) === true || nota < 0 || nota > 10)
        console.log("La nota tiene que ser un número entre 0 y 10");
    else
        notas.push(nota);

    respuesta = confirm("¿Quieres introducir otra nota?");
} while(respuesta === true);

for (let i = 0;i < notas.length;i++) {
    suma += notas[i];
    if (notaMaxima < notas[i])
        notaMaxima = notas[i];

    if (notaMinima > notas[i])
        notaMinima = notas[i];
}


alert("Nota máxima: " + notaMaxima);
alert("Nota mínima: " + notaMinima);
alert("Nota media: " + (suma / notas.length));

console.log("Nota máxima: " + notaMaxima);
console.log("Nota mínima: " + notaMinima);
console.log("Nota media: " + (suma / notas.length));
