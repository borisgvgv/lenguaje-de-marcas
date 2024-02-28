'use strict';

/*
Ejercicio 4
• Crea una función que reciba un string con un path linux (directorios
separados por /) y devuelva un array que contenga todos los
nombres de los directorios del path en sus elementos.
*/

let pathLinux = "/usr/bin/python3";



function devolucioDeArrayPath(pathLinux) {

    pathLinux = pathLinux.slice(1);
    pathLinux = pathLinux.split("/");

    let exitArrayPath = "";
    for (let i = 0; i < pathLinux.length; i++) {
        console.log(pathLinux[i]);
    }
}

devolucioDeArrayPath(pathLinux);

//-------------------------------------------------
/*
• Crea una función que reciba dos strings y devuelva otro string que
contenga el primero con todas las apariciones del segundo string
eliminadas. La búsqueda debe ser case insensitive, es decir, no se
distinguirá entre mayúsculas y minúsculas.

*/


let primerString = "El Perro es rojo y muy perro";
let segundoString = " perro";


function saLidaString(primerString, segundoString) {

    let tercerString = primerString.concat(segundoString);
    console.log(tercerString);
    tercerString = tercerString.toLowerCase()
    tercerString = tercerString.replaceAll("perro", "");
    tercerString = tercerString.charAt(0).toUpperCase() + tercerString.slice(1);
    console.log(tercerString);

}

saLidaString(primerString, segundoString);

//----------------------------------------------------------------------

/*
• Crea una función que reciba tres strings y devuelva un string que
contenga el primer string con todas las apariciones del segundo
string sustituidas por el tercer string.

*/

let primerString1 = "El Perro es rojo y muy perro";
let segundoString1 = " perro";
let tercerString1 = "rojo";

function saLidaString2(primerString1, segundoString1, tercerString1) {


    let cuartoString1 = primerString1.concat(segundoString1);
    console.log(cuartoString1);
    cuartoString1 = cuartoString1.toLowerCase()
    cuartoString1 = cuartoString1.slice(0, 29);
    cuartoString1 = cuartoString1.replaceAll("perro", tercerString1);
    cuartoString1 = cuartoString1.charAt(0).toUpperCase() + cuartoString1.slice(1);
    console.log(cuartoString1);

}

saLidaString2(primerString1, segundoString1, tercerString1);

//---------------------------------------------------------------------------

/*
• Crea un string que reciba un nombre de fichero con extensión y
devuelva el mismo nombre de fichero, pero sustituyendo la
extensión por .bak
*/

let fichero1 = "imagen.png";


function saLidaFichero(fichero1) {
    fichero1 = fichero1.split(".");

    let saLidaFichero1 = "";
    for (let i = 0; i < fichero1.length; i++) {

        saLidaFichero1 += fichero1[i] + ".";

    }

    saLidaFichero1 = saLidaFichero1.slice(0, -1);
    console.log(saLidaFichero1.replace("png", "bak"));
}

saLidaFichero(fichero1);






