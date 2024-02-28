/*
Crea una función que reciba un array con nombres de alumnos
y muestre por pantalla los nombres ordenados
alfabéticamente y numerados.

Utiliza forEach para recorrer el array
*/

let nombres = ["Bertha", "Yaisa", "Mónica", "José Vicente", "Ana", "Boris"];
let arrayfinal=[];
let ordenarYnumerar = function (nombres) {

    nombres.sort();
    let sum = 0;
    nombres.forEach(function () {
        sum++;
        arrayfinal[sum-1] = sum + " " + nombres[sum-1];
    
    })
    console.log(arrayfinal.join(", "))
}

ordenarYnumerar(nombres);



