//function declaration
function add(a,b){
    const result = a+b;
    return result;
}
const sum = add(2,3) ;
console.log(sum);

// function expression
const add2 = function(a,b){
    const result = a+b;
    return result;
}
const sum2 = add2(5,3);
console.log(sum2);

//arrow function
const add3 = (a,b) => a+b ;
const sum3 = add3(9,4);
console.log(sum3);