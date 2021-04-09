var arr1 = [1,8,21,82,91,99];
var ntimes = 2;
console.log("Input Array1:", arr1);


// Anonymous Function
var arr_rotate = function(n,arr)
{
    for(let r=0;r<n;r++)
    {
    let temp = arr[0];
    for(let i=0;i<arr.length-1;i++)
    {
        arr[i] = arr[i+1];
    }
    arr[arr.length-1]=temp;
    }
    console.log(arr);
}
arr_rotate(ntimes,arr1);


// IIFE
arr1 = [1,8,21,82,91,99];
console.log("Input Array1:", arr1);

(function(n,arr)
{
    for(let r=0;r<n;r++)
    {
    let temp = arr[0];
    for(let i=0;i<arr.length-1;i++)
    {
        arr[i] = arr[i+1];
    }
    arr[arr.length-1]=temp;
    }
    console.log(arr);
})(ntimes,arr1);