function countVowels(str) {
  return str.match(/[aeiouAEIOU]/g).length;
}

module.exports = countVowels;
