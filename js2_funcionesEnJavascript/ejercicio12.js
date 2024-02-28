let a = [33, 21, 3, 12, 9, 54];

let b = ["33", "21"];

let numeroMenor = function (num) {

    console.log(
        a.reduce(function (total, num) {
            return num > total ? total : num;
        })
    );

}

let numeroMayor = function (num) {

    console.log(
        a.reduce(function (total, num) {
            return num < total ? total : num;
        })
    );

}

let totalDeLetras = function (num) {

    console.log(num.reduce(function (total, num) {
        //total = total + num;
        return (total + num).length
    }))

}



numeroMenor(a);
numeroMayor(a);
totalDeLetras(b);