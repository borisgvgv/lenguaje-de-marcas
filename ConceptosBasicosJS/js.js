let saludo =
  "Que fácil incliuir'Comillas simples' y \" Comillas dobles \" en un mismo texto";
console.log(saludo);

//Ejercicio 2
let a = ["a", "b", "c", "d", "e"];
a[a.length] = "f";
console.log(a);

//Ejercicio 3
let dias1 = new Array(
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo"
);
let dias = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];
console.log(dias1);
console.log(dias);


//El objeto Number
//Operaciones con números
console.log((3.32924325).toFixed(2)); // Imprime 3.33
console.log((5435.45).toExponential()); // Imprime 5.43545e+3
console.log((3).toFixed(2)); // Imprime 3.00 (Un entero necesita estar dentro de un paréntesis para poder acceder a sus propiedades)

console.log(Number.MIN_VALUE); // Imprime 5e-324 (El número más pequeño)
console.log(Number.MAX_VALUE); // Imprime 1.7976931348623157e+308 (El número más grande)

console.log("2" + "3");
console.log(2 + "3");
console.log(2 + +"4");
console.log("2" + +4);// Aquí para poder sumar estos valores tenemos que poner +"2"
console.log(+"2" + +"3");
console.log(Number("2") + Number("3")); //Convirtiendo string a number
console.log(2 + 3);
console.log("2" * "3");
console.log("2" * 3);
console.log(2 * a);


// Cuando concatenamos un string, el otro operando es convertido a string
console.log(String(32) + 14); // Imprime 3214
console.log("" + 32 + 14); // Imprime 3214


let c = 1;
let d = 5;
console.log(c++); // Imprime 1 y incrementa a (2)
console.log(++c); // Incrementa a (3), e imprime 3
console.log(++c + ++d); // Incrementa a (4) y b (6). Suma (4+6), e imprime 10
console.log(c-- + --d); // Decrementa b (5). Suma (4+5). Imprime 9. Decrementa a (3)
console.log(--c , --d, c + d );


console.log(parseInt("5"));
console.log(isFinite(5.6));

//random
console.log("Numero aleatorio entre 1 y 100: " + Math.floor(Math.random() * 10) + 1);


//Switch con condiciones
let age = 12;
switch(true) {
case age < 18:
console.log("Eres muy joven para entrar");
break;
case age < 65:
console.log("Puedes entrar");
break;
default:
console.log("Eres muy mayor para entrar");
}






