/*
Usando map, crea una función que reciba un array y devuelva
otro donde si los números son pares los divida entre 2 y si son
impares los multiplique por 2.
*/

let a = [4, 21, 33, 12, 9, 54];

let modificarArray = num => {

    console.log(a.map(num => {
        if (num % 2 == 0) {
            return num / 2;
        }
        else {
            return num * 2;
        }
    }))
}


modificarArray(a);


//-----------------------ejercicio 11 modificado

let b = [4, 21, 33, 12, 9, 54];

let filtrar = num => {

    console.log(num.filter(num => {
        return num % 2 == 0;
    }))

}

filtrar(b);

//-----------------------ejercicio 12 modificado
let c = [33, 21, 3, 12, 9, 54];

let d = ["33", "21"];

let numeroMenor = num => {

    console.log(
        num.reduce((total, num) => {
            return num > total ? total : num;
        })
    );

}

let numeroMayor = num => {

    console.log(
        num.reduce((total, num) => {
            return num < total ? total : num;
        })
    );

}

let totalDeLetras = num => {

    console.log(num.reduce((total, num) => {
        //total = total + num;
        return (total + num).length
    }))

}



numeroMenor(c);
numeroMayor(c);
totalDeLetras(d);