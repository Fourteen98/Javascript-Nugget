const fruits = ['orange', 'apple', 'banana', 'grapes', 'mango']
const friends = ['john', 'peter', 'bob', 'anna', 'kelly']

const fruit1 = fruits[0]
const fruit2 = fruits[1]
const fruit3 = fruits[2]
const fruit4 = fruits[3]
const fruit5 = fruits[4]

console.log(fruit1, fruit2, fruit3, fruit4, fruit5);

const [john, , bob, anna, kelly] = friends;
console.log(john, bob, anna, kelly);

let first = 'bob';
let second = 'john';
// let temp = second;
// second = first;
// first = temp;

[second, first] = [first, second];

console.log(first, second);