function arrayIntersection(arr1, arr2) {
  const arr = [];
  const uniqueArr = new Set(arr1);

  for (value of arr2) {
    if (uniqueArr.has(value)) {
      arr.push(value);
    }
  }
  return arr;
}

module.exports = arrayIntersection;
