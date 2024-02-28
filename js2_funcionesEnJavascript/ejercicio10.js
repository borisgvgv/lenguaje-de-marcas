/*
Usando map, crea una función que reciba un array y devuelva
otro donde si los números son pares los divida entre 2 y si son
impares los multiplique por 2.
*/

let a = [4, 21, 33, 12, 9, 54];

let modificarArray = function (num) {


    return a.map(function (num) {
        if (num % 2 == 0) {
            return num / 2;
        }
        else {
            return num * 2;
        }
    })
}

let resultado = modificarArray(a);
console.log(resultado);


