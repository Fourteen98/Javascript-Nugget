// Javascript Nugget-Promises

// asyn await
// consume/use promises

// pending, rejected, fulfilled

const value = 2;


const promise = new Promise((resolve, reject ) => {
  const random = Math.floor(Math.random() * 3);
  console.log(random);
  if (random === value) {
    resolve("You guess correctly");
  } else {
    reject('wrong number');
  }
});

console.log(promise);

promise.then((value) => {
  console.log(value)
}).catch((err) => console.log(err));