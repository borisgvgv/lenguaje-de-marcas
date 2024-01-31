let arrayDiasSemana = ["lunes","martes","miercoles","viernes","sabado","domingo"];
let diasEnLinea= '';
for(let diasSemana in arrayDiasSemana){
    console.log(arrayDiasSemana[diasSemana]);
    diasEnLinea += arrayDiasSemana[diasSemana] + " ";
}
console.log(diasEnLinea);