// function makeUppercase(value) {
//   console.log(value.toUpperCase());
// }

// makeUppercase('peter');

function reverseString(value) {
  console.log(value.split('').reverse().join(''));
}

function handleName(name, cb) {
  const fullName = `${name} smith`;
  cb(fullName);
  // some more logic here
}

// handleName('peter', makeUppercase);
// handleName('peter', reverseString);

// handleName('susan', function (value) {
//   console.log(value)
// });

handleName('susan', (value) => console.log(value));
