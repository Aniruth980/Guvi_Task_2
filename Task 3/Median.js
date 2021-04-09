var ar1 = [1, 5, 2, 7, 9];
var ar2 = [8, 3, 0, 4, 6];


//ANONYMOUS FUNCTION
let anonymous_ans = function (ar1, ar2) {
    let i = 0, j = 0, count, m1 = -1, m2 = -1;
    for (count = 0; count <= ar1.length; count++) {
        if (i == ar1.length) {
            m1 = m2;
            m2 = ar2[0];
            break;
        }

        else if (j == ar1.length) {
            m1 = m2;
            m2 = ar1[0];
            break;
        }

        if (ar1[i] <= ar2[j]) {

            m1 = m2;
            m2 = ar1[i];
            i++;
        }
        else {

            m1 = m2;
            m2 = ar2[j];
            j++;
        }
    }

    return (m1 + m2) / 2;
}
console.log(anonymous_ans(ar1, ar2));


//IIFE
let iife_ans = (function () {
    let i = 0, j = 0, count, m1 = -1, m2 = -1;
    for (count = 0; count <= ar1.length; count++) {
        if (i == ar1.length) {
            m1 = m2;
            m2 = ar2[0];
            break;
        }

        else if (j == ar1.length) {
            m1 = m2;
            m2 = ar1[0];
            break;
        }

        if (ar1[i] <= ar2[j]) {

            m1 = m2;
            m2 = ar1[i];
            i++;
        }
        else {

            m1 = m2;
            m2 = ar2[j];
            j++;
        }
    }

    return ((m1 + m2) / 2);

}
)(ar1, ar2);
console.log(iife_ans);