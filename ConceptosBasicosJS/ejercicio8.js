/*
Ejercicio 8
• Crea un script que calcule un número aleatorio entre 1 y 50
• Este número será el radio de una circunferencia
• A partir de este radio, debes calcular el diámetro, el área y el
perímetro de la circunferencia.
 */

let radio = Math.floor(Math.random() * 50);
console.log("Radio: " + radio + ", " );
document.write("Radio: " + radio + ", ");

let diametro = radio * 2;
let area = Math.PI * Math.pow(radio,2); 
let perimetro = Math.PI * diametro;


console.log("Diametro: " + diametro + ", Área: " + area.toFixed(2) + ", Perímetro: " + perimetro.toFixed(2));
document.write("Diametro: " + diametro + ", Área: " + area.toFixed(2) + ", Perímetro: " + perimetro.toFixed(2));
