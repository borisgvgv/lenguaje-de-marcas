let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let diaSemanaEs = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
let diaSemanaEn = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let fecha = new Date();

function mostrarFecha(fecha) {

    let diaEs = diaSemanaEs[fecha.getDay() - 1];
    let diaEn = diaSemanaEn[fecha.getDay() - 1];
    let diaMes = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let numMes = fecha.getMonth() + 1;
    let year = fecha.getFullYear();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let miliSegundos = fecha.getMilliseconds();

    console.log(`${diaEs} ${diaMes} de ${mes} de ${year}, ${hora}:${minutos}:${segundos}:${miliSegundos}`);
    console.log(`Formato español: ${diaEs}, ${diaMes}/${numMes}/${year}, ${hora}:${minutos}:${segundos}`);
    console.log(`Formato Americano: ${diaEn}, ${numMes}/${diaMes}/${year}, ${hora}:${minutos}:${segundos}`);

    document.write(`${diaEs} ${diaMes} de ${mes} de ${year}, ${hora}:${minutos}:${segundos}:${miliSegundos}`);
    document.write("<br>");
    document.write(`Formato español: ${diaEs}, ${diaMes}/${numMes}/${year}, ${hora}:${minutos}:${segundos}`);
    document.write("<br>");
    document.write(`Formato Americano: ${diaEn}, ${numMes}/${diaMes}/${year}, ${hora}:${minutos}:${segundos}`);
    document.write("<br>");
}




mostrarFecha(fecha);

//----------------------------------------------------


function anyofecha(fecha) {
    let year = fecha.getFullYear();
  
    return toString(year);  
}

console.log(typeof anyofecha(fecha));


//----------------------------------------------------



let fecha2 = new Date();
let fechaIn = prompt("Introduce una fecha");
fecha2 = fecha2.setFullYear(fechaIn);


console.log(fecha2.toDateString());


/*
if(fecha2 > anyofecha(fecha)){
    console.log(`La fecha introducidad es mayor que ${fechaFormatoEs(fecha)}`);
    document.write(`La fecha introducidad es mayor que ${fechaFormatoEs(fecha)}`); 
    document.write("<br>");

}else{
    console.log(`La fecha introducidad es menor o igual que ${fechaFormatoEs(fecha)}`);
    document.write(`La fecha introducidad es menor o igual que ${fechaFormatoEs(fecha)}`); 
    document.write("<br>");
}

*/