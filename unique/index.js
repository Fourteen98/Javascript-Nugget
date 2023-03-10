const menu = [
  {
    name: 'pancakes',
    category: 'breakfast',
  },
  {
    name: 'burger',
    category: 'lunch',
  },
  {
    name: 'steak',
    category: 'dinner',
  },
  {
    name: 'bacon',
    category: 'breakfast',
  },
  {
    name: 'eggs',
    category: 'breakfast',
  },
  {
    name: 'pasta',
    category: 'dinner',
  },
];

const categories = [...new Set(menu.map((item) => {
  return item.category;
}))];

console.log(categories);

const result = document.getElementById('result');
result.innerHTML = categories.map((category) => {
  return `<button>${category}</button>`
}).join('');