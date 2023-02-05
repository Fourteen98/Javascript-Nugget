const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};

let last = "some value";
const { first, last: shakeAndBake, city, zip, siblings:{sister} } = bob;
console.log(first, shakeAndBake, city, last, sister);


function printPerson(person) {
  const { first, last, city } = person;
  console.log(first, last);
}

printPerson(bob);