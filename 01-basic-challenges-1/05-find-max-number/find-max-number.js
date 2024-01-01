function findMaxNumber(arr) {
  let maxNumber = arr[0];

  for (let value of arr) {
    value > maxNumber ? (maxNumber = value) : null;
  }

  return maxNumber;
}

module.exports = findMaxNumber;
