'use strict';

/*
let Library = {} // Objeto que contiene métodos de la librería y propiedades

(function (library) {

    let localName = "Peter";
    
    library.sayHello = function () { // Creando un nuevo método dentro de IIFE
        console.log("Hello " + localName); // Desde aquí podemos acceder a localName
    }

})(Library); // Pasamos el objeto global a la función del IIFE

Library.sayHello(); // Imprime "Hello Peter" 
*/

/*
Crea una función que reciba un array con nombres de alumnos
y muestre por pantalla los nombres ordenados
alfabéticamente y numerados.

Utiliza forEach para recorrer el array
*/




let Ordenar = {};
(function (ordenar) {

    let nombres = ["Bertha", "Yaisa", "Mónica", "José Vicente", "Ana", "Boris"];

    ordenar.ejecutarOrdenar = function () {
        console.log(nombres.sort());
    }

})(Ordenar);

Ordenar.ejecutarOrdenar();


let Numerar = {};
(function (numerar) {


    let sum = 0;
    let arrayfinal = [];
    Ordenar.ejecutarOrdenar();

    numerar.ejecutarNumerar = function () {
        nombres.forEach(element => {
            sum++;
            arrayfinal[sum - 1] = sum + " " + nombres[sum - 1];
        });
        console.log(arrayfinal.join(", "));
    }

})(Numerar);

Numerar.ejecutarNumerar();



/*

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

*/
