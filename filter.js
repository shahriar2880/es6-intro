const number = [1,2,3,4,5,6];
const players = [23,34,45,56,78,89];
// const selected = players.filter(p => p > 60);

//odd number ---filter--- process
const selected = players.filter(p => p %2 === 1);
console.log(selected);

//find
const selects = number.find(n => n > 4)
console.log(selects);

/**
 * 1. map
 * 2. forEach
 * 3. filter
 * 4. find
 */