function factorial(num) {
    //define a result variable
    var result = 1;
    //calculate factorial and store value in result
    for(var i = 2; i <= num; i++) {
        result *= i;
    }
    //return the result variable
    return result;
}

factorial(5);
// factorial(2);
// factorial(10);
// factorial(0);