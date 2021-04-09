var arr = [1,2,3,4,5,6,7,8,9];

// Anonymous Function
var anonymousFunc = function(arr){
    for(let i of arr)
    {
        if(i%2!==0)
        {
            console.log(i);
        }
    }
}
anonymousFunc(arr);

// IIFE
(function(arr){
    for(let i of arr)
    {
        if(i%2!==0)
        {
            console.log(i);
        }
    }
})(arr);