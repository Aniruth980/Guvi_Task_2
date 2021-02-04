//ANONYMOUS FUNCTION
var a = [2, 4, 6, 8, 10, 12, 14, 16];
let anonymous_ans = function () {
    for (let i of a) {
        sum = (sum + i);
    }
    return sum;
}


    //IIFE
    (function (a) {
        let sum1 = 0;
        for (let i of a) {
            sum1 += i;
        }
        console.log(sum1);
    })(a);