function fizzBuzzArray(n) {
  const arr = [];
  let count = 0;

  while (count < n) {
    count++;

    if (count % 3 === 0 && count % 5 === 0) {
      arr.push('FizzBuzz');
    } else if (count % 5 === 0) {
      arr.push('Buzz');
    } else if (count % 3 === 0) {
      arr.push('Fizz');
    } else arr.push(count);
  }

  return arr;
}

module.exports = fizzBuzzArray;
