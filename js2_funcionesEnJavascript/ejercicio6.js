/*

Realiza los siguientes pasos (muestra por consola el resultado
después de aplicar cada uno, pero con los elementos
separados por "==>" (Join)):
• Crea un array con 4 elementos numéricos
• Concatena 2 elementos más al final y 2 al principio (unshift y
push)
• Elimina las posiciones de la 3 a la 5 (incluida) (splice)
• Inserta 2 elementos más entre el penúltimo y el último (splice)
• Invierte el array (reverse)
• Muestra el array ordenado (sort)

*/

let arrayNum = [4, 9, 3, 5];
console.log(arrayNum);

console.log(arrayNum.join(" ==> "));
arrayNum.unshift(1, 6)
arrayNum.push(2, 7)
console.log(arrayNum.join(" ==> "));
arrayNum.splice(3, 2);
console.log(arrayNum.join(" ==> "));
arrayNum.splice(4, 0, 8, 9, 3);
console.log(arrayNum.join(" ==> "));
arrayNum = arrayNum.sort()
console.log(arrayNum.join(" ==> "));
arrayNum = arrayNum.reverse();
console.log(arrayNum.join(" ==> "));







