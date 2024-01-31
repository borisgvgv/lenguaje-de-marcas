console.log("Conversor de Euros a dolares");
let euros = prompt("Conversor de Euros a dolares\nEuros", "Euros");
if (isNaN(euros)) {
  console.log("Debes introducir un número válido");
} else {
  let dolares = Number(euros) * 1.092;
  console.log(dolares.toFixed(3));
  document.write(dolares.toFixed(3))
}
