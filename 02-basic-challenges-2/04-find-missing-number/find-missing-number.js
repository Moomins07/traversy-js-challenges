function findMissingNumber(arr) {
  if (!arr || arr.length === 0) {
    return undefined;
  }

  const uniqueArr = Array.from(new Set(arr));
  const n = uniqueArr.length + 1;
  const sumOfArr = uniqueArr.reduce((acc, curr) => acc + curr, 0);

  let inclusiveSum = (n * (n + 1)) / 2;

  return inclusiveSum - sumOfArr;
}

module.exports = findMissingNumber;
