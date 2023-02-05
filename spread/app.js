 // spread when invoke the function

const udemy = 'udemy';
const letters = [...udemy];
console.log(letters);

const boys = ['john', 'peter', 'bob'];

const girls = ['susan', 'anna'];

const bestFriend = 'arnold';

const friends = [...boys, ...girls, bestFriend];
console.log(friends);

// copy 
// const newFriends = friends;
// reference

const newFriends = [...friends];
newFriends[0] = 'nancy';
console.log(newFriends);
console.log(friends);



// ES2018 - ES8 Objects

const person = { name: 'john', job: 'developer' };

const newPerson = { ...person, city:'chicago', name: 'williams' };
console.log(person);
console.log(newPerson);

