// Rest Operator
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function

// arrays
const fruits = ['apple', 'orange', 'lemon', 'banana'];
const [first, second, ...restOfTheFruits] = fruits;
console.log(first, restOfTheFruits);

const specificFruit = restOfTheFruits.find((fruit) => fruit === 'lemon');
console.log(specificFruit);

//objects
const person = { name: 'john', lastName: 'smith', job: 'developer' };
const { name, ...rest } = person;
console.log(name, rest);

// functions
const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  const average = scores.reduce((total, item) => {
    return total += item
  }, 0) / scores.length;
  console.log(average);
}

// getAverage(person.name, 89, 45, 202, 101);

const testSCores = [23, 45, 67, 89];
getAverage(person.name, ...testSCores);