// Javascript Nuggets
// Async / Await
// Async must be present, always returns a promise
// await waits till promise is settle
// error handling - try/catch block

// const example = async () => {
//   return 'hello world';
// }

// async function somefunc() {
//   const result = await example();
//   console.log(result);
//   console.log('hello world');
// }

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'susan' },
  { id: 3, name: 'anna' },
]

const articles = [
  { userId: 1, articles: ['one', 'two', 'three'] },
  { userId: 2, articles: ['four', 'five'] },
  { userId: 3, articles: ['six', 'seven', 'eigth', 'nine'] },
]

const getData = async () => {
  try {
    const user = await getUser('susan');
    console.log(user);
    const userArticles = await getArticles(user.id);
    console.log(userArticles);
  } catch (error) {
    console.log(error)
  }
}

getData();

// getUser('susan')
//   .then((user) => {
//     getArticles(user.id)
//       .then((articles) => {
//         console.log(articles)
//       })
//       .catch((e) => {
//         console.log(e);
//     })
//   })
//   .catch((e) => {
//     console.log(e);
//   });

function getUser(name) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name);
    if (user) {
      return resolve(user);
    } else {
      return reject(`No such user with name: "${name}`);
    }
  });
}

function getArticles(userId) {
  return new Promise((resolve, reject) => {
    const userArticles = articles.find((user) => user.userId === userId);
    if (userArticles) {
      return resolve(userArticles);
    } else {
      return reject(`wrong ID: "${userId}`);
    }
  });
}