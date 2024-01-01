function removeDuplicates(arr) {
  let uniqueArr = [...new Set(arr)];
  return uniqueArr;
}

module.exports = removeDuplicates;
