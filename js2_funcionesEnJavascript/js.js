/*Funciones
• En Javascript se utiliza la palabra reservada function
antes del nombre de la función.
• Los argumentos se pasan entre paréntesis tras el nombre
de la función (recuerda que en Javascript no hay tipos de
datos)
• Posteriormente va el cuerpo de la función entre llaves.
• El nombre de la función, como las variables, debe seguir
el formato CamelCase con la primera letra en minúscula.
*/

function sayHello(name) {
console.log('Hello' + name);
}
sayHello('Álex');

/*
• Puedes declarar el prototipo de la función donde quieras.
• No necesitas tener la función declarada antes de llamarla, ya
que Javascript primero procesa las declaraciones de las
variables y funciones y después ejecuta el resto del código.
• Para llamar a una función, simplemente, pones el nombre de
la función, y entre paréntesis, el valor de los parámetros que
le pasas.
• El número de parámetros que le pases puede no coincidir con
el que número de parámetros que tiene la declaración de la
función:
• Si envías de más: Los sobrantes son ignorados
• Si envías de menos: A los que faltan se les asigna el valor
undefined
• Ejemplo: Llamada a la función sayHello anterior
sayHello(); // Imprimirá undefined
*/

sayHello(); // Imprimirá undefined

/*
Parámetros por defecto
• Si un parámetro se declara en una función y no se pasa
cuando la llamamos, se establece su valor como
undefined.
• El operador boolean || puede ser usado para simular valores
por defecto en una función
*/

function sayHello2(name2) {
    // Si name es undefined o vacío (""), Se le asignará "Anonymous" por defecto
    let sayName = name2 || "Anonymous";
    console.log("Hello " + sayName);
    }
    sayHello2("Peter"); // Imprime "Hello Peter"
    sayHello2(); // Imprime "Hello Anonymous"

/*
Parámetros por defecto en ES6
• Desde ES2015 tenemos la opción de establecer un valor por
defecto.
*/

function printNombre(nombre = "Anónimo") {
console.log("Nombre: " + nombre);
}
printNombre(); // Imprime Nombre: Anónimo

/*
• También podemos asignarle un valor por defecto basado en
una expresión
*/

function getPrecioTotal(precio, impuesto=precio*0.07) {
return precio + impuesto;
}
console.log(`El precio total es: ${getPrecioTotal(100)}`); // Imprime 107

/*
Valor de retorno
• Cuando una función devuelve un valor utilizaremos la palabra
reservada return.
• Para recibir el valor enviado por la función, la llamada
deberemos asignársela a una variable o meterla dentro del
parámetro de otra función.
• Si intentamos recuperar algo de una función que no devuelve
nada nos dará undefined.
*/

function totalPrice(priceUnit, units) {
return priceUnit * units;
}
let total = totalPrice(5.95, 6); // Imprime 35.7
console.log(total);
console.log(totalPrice(5.95, 6)); // Imprime 35.7

/*
Colisión de nombres de
variables
• Si tenemos una variable global con el mismo nombre que
una local, dentro del ámbito de la variable local se
utilizará esta, pero fuera se utilizará la variable global
*/
function setPerson() {
    let person = 'Álex';
    console.log(person); // Imprime 'Álex'
    }
    let person = 'Pablo';
    setPerson(); //Imprime 'Alex'
    console.log(person); // Imprime 'Pablo'

/*
Paso de parámetros por
referencia
• A diferencia de los tipos primitivos como boolean, number o string, los
arrays son tratados como un objeto en JavaScript, lo cual significa que
tienen un puntero o referencia a la dirección de memoria que contiene el
array.
• Cuando se copia una variable o se envía esa variable como parámetro a una
función, estamos copiando la referencia y no el array, por tanto ambas
variables apuntarán a la misma zona de memoria.
• Si, por ejemplo, cambiamos la información que teníamos almacenada en
una de esas variables, estaremos cambiando la información de la otra
también ya que son el mismo objeto.
*/

let a = 61;
let b = a; // b = 61
b = 12;
console.log(a); // Imprime 61
console.log(b); // Imprime 12
let a1 = [12, 45, 13];
let b1 = a1; // b ahora referencia al mismo array que a
b1[0] = 0;
console.log(a1); // Imprime [0, 45, 13]