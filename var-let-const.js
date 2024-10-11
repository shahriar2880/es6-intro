//var: no reason to use var
// let: allow it to reassign
// const: do not allow to reassign

function friends(first, last =""){
    const full = first + " " + last;
    return full;
}
const Fullname = friends('rahim', 'rahman')

console.log(Fullname);