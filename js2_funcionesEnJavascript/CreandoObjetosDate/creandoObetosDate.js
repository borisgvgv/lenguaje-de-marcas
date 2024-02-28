let date = new Date(1363754739620); // Nueva fecha 20/03/2013 05:45:39 (milisegundos desde Epoch)
let date2 = new Date(2015, 5, 17, 12, 30, 50); // 17/06/2015 12:30:50 (Mes empieza en 0 -> Ene, ... 11 - > Dic)
let date3 = new Date("2015-03-25"); // Formato de fecha largo sin la hora YYYY-MM-DD (00:00:00)
let date4 = new Date("2015-03-25T12:00:00"); // Formato fecha largo con la fecha
let date5 = new Date("03/25/2015"); // Formato corto MM/DD/YYYY
let date6 = new Date("25 Mar 2015"); // Formato corto con el mes en texto (March también sería válido).
let date7 = new Date("Wed Mar 25 2015 09:56:24 GMT+0100 (CET)"); // Formato completo con el timezone
let nowMs = Date.now()// Momento actual en ms
let dateMs = Date.parse("01 feb 2024"); // 25 Marzo 2015 en ms
let dateMs2 = Date.UTC(2015, 2, 25); // 25 Marzo 2015 en ms

// Crea un objeto fecha de hace 2 horas
let twoHoursAgo = new Date(Date.now() - (1000*60*60*2));
// (Ahora - 2 horas) en ms
// Ahora hacemos lo mismo,pero usando el método setHours
let twoHoursAgo2 = new Date();
twoHoursAgo2.setHours(twoHoursAgo2.getHours() - 2);


let arrayDates = [date ,date2, date3, date4, date5, date6,date7, nowMs, dateMs, dateMs2, twoHoursAgo, twoHoursAgo2];

//Mostramos las fechas de dos formas usando for
for(let i=0 ; i <  arrayDates.length; i++){
    console.log(arrayDates[i]);
}

console.log(arrayDates.length);

for(let mostraDates in arrayDates){
    console.log( arrayDates[mostraDates]);
}