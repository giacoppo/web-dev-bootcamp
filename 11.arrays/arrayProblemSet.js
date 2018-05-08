//printReverse

function printReverse(arr) {
    for(var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

printReverse([3,6,2,5]);

//-------------------------------------------

//isUniform

function isUniform(arr) {
    var first = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] !== first) {
            console.log("false");
            return false;
        }
    }
    console.log("true");
    return true;
}

isUniform([1,1,1,1]);

//-------------------------------------------

//sumArray

function sumArray(arr) {
    var total = 0;
    arr.forEach(function(element) {
        total += element;
    });
    console.log("The total of sumArray is: " + total);
    return total;
}

sumArray([1,2,3,4]);

//------------------------------------------

//max

function max(arr) {
    var max = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    console.log("The max is: " + max);
    return max;
}

max([1,2,3]);
max([1,200,3,-100,5]);