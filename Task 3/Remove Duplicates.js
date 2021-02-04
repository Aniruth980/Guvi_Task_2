var arr1 = [1, 1, 2, 2, 2, 3, 4, 5, 5, 5, 6, 6, 7, 7, 7, 7, 8, 8, 9, 10, 10];
var uniqlist = [];

// Anonymous Function
var remove_duplicate = function (arr1) {
    console.log("Input Array List:", arr1);
    for (i in arr1) {
        if (arr1.indexOf(arr1[i]) == arr1.lastIndexOf(arr1[i])) {
            uniqlist.push(arr1[i]);
        }
    }
    return uniqlist;
}
console.log(remove_duplicate(arr1));


// IIFE
uniqlist = [];
console.log((function (arr1) {
    console.log("Input Array List:", arr1);
    for (i in arr1) {
        if (arr1.indexOf(arr1[i]) == arr1.lastIndexOf(arr1[i])) {
            uniqlist.push(arr1[i]);
        }
    }
    return uniqlist;
})(arr1));
