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

//single parameter or one parameter
const getAge = (person) => person.age ;
const student = {
    name: "shahriar reza",
    age: 26,
    desig: "Job Holder"
}
const age = getAge(student);
console.log(age);