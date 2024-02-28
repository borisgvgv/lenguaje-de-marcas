let a = [4, 21, 33, 12, 9, 54];

let filtrar = function(num){

    return a.filter(function(num){
        return num % 2 == 0;
    })

}

console.log(filtrar(a));