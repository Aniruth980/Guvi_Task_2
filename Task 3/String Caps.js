var str1 = "I lOvE JaVaScRiPt"

console.log("Before Caps:", str1);

// Anonymous Function
var titleCaps = function (str1) {
    strarr = str1.toLowerCase().split(" ");
    for (let i = 0; i < strarr.length; i++) {
        strarr[i] = strarr[i].charAt(0).toUpperCase() + strarr[i].slice(1);
    }
    console.log(strarr.join(" "));
}
titleCaps(str1);




// IIFE
(function (str1) {

    strarr = str1.toLowerCase().split(" ");

    for (let i = 0; i < strarr.length; i++) {
        strarr[i] = strarr[i].charAt(0).toUpperCase() + strarr[i].slice(1);
    }
    console.log(strarr.join(" "));
})(str1);