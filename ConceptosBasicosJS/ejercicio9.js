/*
Ejercicio 9
• Vamos a realizar un conversor multi moneda.
• Para ello, en primer lugar le preguntaremos al usuario el tipo
de conversión a realizar.
• Los posibles valores serán:
1. euro – dólar
2. euro – libra
3. euro – yen
• Una vez seleccionado el tipo de conversión se le preguntará el
importe a convertir.
• Finalmente, se mostrará por pantalla el valor de la conversión
en la moneda seleccionada.
*/

let tipoMoneda = prompt("Cambio a: ", "Tipo de moneda");
let euros = prompt("¿Euros a cambiar?");
let dolar = 1.092;
let libra = 0.79;
let yen = 146.56;

switch (true) {
  case tipoMoneda.toUpperCase() == "DÓLAR" ||
    tipoMoneda.toUpperCase() == "DOLAR" ||
    tipoMoneda.toUpperCase() == "DÓLARES" ||
    tipoMoneda.toUpperCase() == "DOLARES":
    let dolares = Number(euros) * dolar;
    console.log(dolares.toFixed(3) + " dólares");
    document.write(dolares.toFixed(3) + " dólares");
    break;
  case tipoMoneda.toUpperCase() == "LIBRA" ||
    tipoMoneda.toUpperCase() == "LIBRAS":
    let libras = Number(euros) * libra;
    console.log(libras.toFixed(3) + " GBP");
    document.write(libras.toFixed(3) + " GBP");
    break;
  case tipoMoneda.toUpperCase() == "YEN" || tipoMoneda.toUpperCase() == "YENES":
    let yenes = Number(euros) * yen;
    console.log(yenes.toFixed(3) + " JPY");
    document.write(yenes.toFixed(3) + " JPY");
    break;
  default:
    console.log("Ha habido un error\nRevise los datos y vuelva a intentarlo");

    let mensajeHTML = "Ha habido un error<br>Revise los datos y vuelva a intentarlo";
    document.querySelector("body").innerHTML= mensajeHTML;

    break;
}
