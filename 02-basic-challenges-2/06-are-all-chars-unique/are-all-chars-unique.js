function areAllCharactersUnique(str) {
  const uniqueStr = new Set();

  if (str === '') {
    return true;
  }

  for (let i = 0; i < str.length; i++) {
    if (uniqueStr.has(str[i])) {
      return false;
    }
    uniqueStr.add(str[i]);
  }
  return true;
}

module.exports = areAllCharactersUnique;
