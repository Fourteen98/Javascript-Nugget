/* We've started Quokka for you automatically on this file.
 *
 * To open a new Quokka file:
 *   - Press `⌘ K, J` to create a new JavaScript File
 *   - Press `⌘ K, T` to create a new TypeScript File
 *   - Press `⌘ K, L` to open an interactive sample from:
 *     https://github.com/wallabyjs/interactive-examples
 *
 * To start/restart Quokka on an existing file:
 *   - Press `⌘ K, Q`
*/

const people = [
  {
    name: 'John',
    age: 20,
    position: 'developer',
  },
  {
    name: 'Bob',
    age: 25,
    position: 'designer',
  },
  {
    name: 'Peter',
    age: 30,

    position: 'the boss',
  },
  {
    name: 'Anna',
    age: 35,
    position: 'the boss',
  },
];

const getAges = (person) => person.age * 2;

const ages = people.map((person) => {
  return person.age;
})
console.log(ages);

const newPeople = people.map((person) => {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
  };
});

console.log(newPeople);

const names = people.map(person => 
  `<h2>${person.name}</h2>`
);
const result = document.getElementById("result");
result.innerHTML = names.join('');