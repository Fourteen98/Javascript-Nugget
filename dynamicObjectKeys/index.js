const person = {
  name: 'John',
};

console.log(person.name);
person.age = 25;
console.log(person);

const items = {
  'featured-item': ['item1', 'item2']
};

console.log(items['featured-item']);
console.log(person['name']);

let appState = 'loading';
const keyName = 'computer';

const app = {
  [appState]: true
};

app[keyName] = 'apple';

console.log(app);

const state = {
  loading: true,
  name: '',
  job: ''
}

function updateState(key, value) {
  state[key] = value;
}

updateState('name', 'Elias');
updateState('job', 'Developer');
updateState('loading', false);
updateState('product', ['oranges', 'bananas']);

console.log(state);

