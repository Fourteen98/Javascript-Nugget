const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  addColor(1000, '.first', 'red').then(() => {
    addColor(3000, '.second', 'blue').then(() => {
      addColor(5000, '.third', 'green').catch((e) => {
        console.log(e);
      });
    }).catch((e) => {
      console.log(e);
    });
  }).catch((e) => console.log(e));
});

function addColor(time, selector, color) {
  const element = document.querySelector(selector);
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(`There is no such element:"${element}"`);
    }
  })
}