var arr = ['HELLO', '12121', 'MALAYALAM', 'TENET', 'ENGINEER'];
var arr1 = [];

// Anonymous Function
let anonymous_ans = function (arr) {
    for (let i in arr) {
        if (arr[i] == (arr[i].split("").reverse().join("")))
            arr1.push(arr[i]);
    }
    return arr1;

}
console.log(anonymous_ans(arr).join(" "));


//IIFE
var arr1 = []
let iife_ans = (function () {
    for (let i in arr) {
        if (arr[i] == (arr[i].split("").reverse().join("")))
            arr1.push(arr[i]);
    }
    return arr1;
}
)(arr);

console.log(iife_ans.join(" "));