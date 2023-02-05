// Array.from - Not on prototype
// from - returns array object from an object
// with length property or an iterable object
// from - turns array-like/ish into array - string

const udemy = 'udemy';
// console.log(Array.from(udemy));

const text = document.querySelectorAll('.text');
// console.log(text);
const newText = Array.from(text).find((item) => item.textContent === 'Person');
// console.log(newText);

const items = Array.from({length:120}, (_, index) => {
  return index;
});

const itemsPerPage = 14;
const pages = Math.ceil( items.length / itemsPerPage );

const newItems = Array.from({length:pages}, (_, index)=> {
  const start = index * itemsPerPage;
  console.log('index ->' + index);
  console.log('start ->' + start);
  // console.log('itemsPerPage ->' + itemsPerPage);
  const tempItems = items.slice(start, start + itemsPerPage);
  return tempItems;
})
console.log(newItems);