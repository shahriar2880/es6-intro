//function declaration
function add(a,b){
    const result = a+b;
    return result;
}
const sum = add(2,3) ;

// function expression
const add2 = function(a,b){
    const result = a+b;
    return result;
}
const sum2 = add2(5,3);
console.log(sum2)