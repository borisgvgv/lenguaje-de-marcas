/*
let userConfirmation = confirm("Do you want to proceed?");
if (userConfirmation) {
    // User clicked "OK"
    alert("You chose to proceed!");
} else {
    // User clicked "Cancel"
    alert("You chose to cancel.");
}
*/
/*
Ejercicio 7-2
• Crea un script que al cargar la página le pida al usuario el valor
numérico de una nota y muestre por pantalla si el alumno está
aprobado o suspendido.
• Las notas deben ser numéricas y estar entre 0 y 10, en caso
contrario se mostrará un mensaje por consola indicándolo.
*/



let nota = prompt("Introduce tu nota", "Nota");
if (nota < 0 || nota > 10) {
    console.log("La nota debe estar entre 0 y 10");
    document.write("La nota debe estar entre 0 y 10");
} else if ((nota >= 5) && (nota <= 10)) {
    console.log("Estás aprobado");
    alert("Estás aprobado");
} else {
    console.log("Estás suspenso");
    alert("Estás suspenso");
}

let confirmacion;
do {
    confirmacion = confirm("Deseas revisar otra nota?");
    if (confirmacion) {
        nota = prompt("Introduce tu nota", "Nota");
        if (nota < 0 || nota > 10) {
            alert("La nota debe estar entre 0 y 10");
        } else if ((nota >= 5) && (nota <= 10)) {
            console.log("Estás aprobado");
            alert("Estás aprobado");
        } else {
            console.log("Estás suspenso");
            alert("Estás suspenso");
        }
    } else {
        alert("Hasta pronto");
    }

} while (confirmacion);

