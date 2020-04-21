const {Range} = require('immutable');

//from 5 to infinity
const r1 = Range(5);
console.log(r1);

// start, end, step
const r2 = Range(6,10,2);
console.log(r2);
r2.forEach(x=>console.log(x));

//Repeat(value, times) generate seq of N vals, no times = infinity
const {Repeat} = require('immutable');
const repeat1 = Repeat(666);
console.log(repeat1);

const repeat2 = Repeat(999,20);
console.log(repeat2);
repeat2.forEach(x=>console.log(x));



