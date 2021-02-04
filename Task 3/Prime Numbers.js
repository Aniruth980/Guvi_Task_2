var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15];
console.log(arr1.length);
var prime_arr = [];

// Anonymous Function
var prime_func = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        prime_arr.push(arr[i]);
        for (let j = 2; j < arr[i]; j++) {
            if (arr[i] % j == 0) {
                prime_arr.pop();
                break;
            }
        }
    }
    return prime_arr;
}
console.log(prime_func(arr1));


// IIFE
prime_arr = [];
var prime = (function (arr) {
    for (let i = 0; i < arr.length; i++) {
        prime_arr.push(arr[i]);
        for (let j = 2; j < arr[i]; j++) {
            if (arr[i] % j == 0) {
                prime_arr.pop();
                break;
            }
        }
    }
    return prime_arr;
})(arr1);
console.log(prime);