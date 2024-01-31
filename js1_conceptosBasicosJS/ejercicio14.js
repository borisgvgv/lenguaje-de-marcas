'use strict';

let nombre = prompt("Introduce nombre: ");
let nombreInverso_in = '';
let nombreInverso_of = '';

for(let letra in nombre) {
    nombreInverso_in = letra + nombreInverso_in;
}
for(let letra of nombre) {
    nombreInverso_of = letra + nombreInverso_of;
}

console.log(nombreInverso_in);
console.log(nombreInverso_of);