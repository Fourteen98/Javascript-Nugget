// Filter - returns an array of all the elements that pass the test
// Find - returns the first element that passes the test

const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'anna', age: 35, position: 'intern' },
]

const fruits = ['orange', 'pear', 'lemon'];

// filter
const youngPeople = people.filter((person) => {
  // if (person.age < 30)
  //   return person;  
  return person.age < 30
});

console.log(youngPeople)

const developer = people.filter((person) => {
  return person.position === 'developer';
});

console.log(developer);

// no match

const seniorDevs = people.filter((item) => {
  return item.position === 'senior devs';
});

console.log(seniorDevs);

// find
const peter = people.find((person) => { return person.name === 'peter' });
console.log(peter);

const fruit = fruits.find((fruit) => { return fruit === 'lemon' });
console.log(fruit);

// no match
const oldPerson = people.find((person) => { return person.age > 35 });
console.log(oldPerson);

// multiple matches - first match
const randomPerson = people.find(person => person.age < 35);
console.log(randomPerson);

const anna = people.filter(person => person.name === 'anna');
console.log(anna[0]);