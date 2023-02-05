// Reduce

const people = [
  { name: 'bob', age: 20, position: 'developer', salary: 100 },
  { name: 'peter', age: 25, position: 'designer', salary: 300 },
  { name: 'susy', age: 30, position: 'the boss', salary: 400 },
  { name: 'anna', age: 35, position: 'intern', salary: 10 },
];

const dailyTotal = people.reduce((acc, curr) => {
  acc += curr.salary;
  return acc;
}, 0)

console.log(dailyTotal);

// Reduce - Objects

// cart example
const cart = [
  {
    title: 'Sumsung Galaxy S7',
    price: 599.99,
    amount: 1,
  },
  {
    title: 'google pixel',
    price: 499.99,
    amount: 2,
  },
  {
    title: 'Xiaomi Redmi Note 2',
    price: 699.99,
    amount: 4,
  },
  {
    title: 'Xiaomi Redmi Note 2',
    price: 699.99,
    amount: 4,
  },
];

let { totalItems, cartTotal } = cart.reduce((total, cartItem) => {
  const { amount, price } = cartItem;
  // count items
  total.totalItems += amount;
  total.cartTotal += price * amount;
  return total;
}, {
  totalItems: 0,
  cartTotal: 0,
})

cartTotal = parseFloat(cartTotal.toFixed(2));
console.log(cartTotal);

console.log(totalItems);

const url = 'https://api.github.com/users/fourteen98/repos?per_page=100';

const fetchRepos = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const newData = data.reduce((total, repo) => {
    const { language } = repo;
    // if (total[language]) {
    //   total[language] = total[language] + 1
    // } else {
    //   total[language] = 1
    // }
    if (language) {
      total[language] = total[language] + 1 || 1
    }
    return total;
  }, {});
  console.log(newData);
}

fetchRepos();

