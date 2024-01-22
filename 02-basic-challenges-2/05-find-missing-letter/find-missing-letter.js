function findMissingLetter(arr) {
  const alphaUpper = Array.from(Array(26)).map((e, i) => i + 65);
  const alphaLower = Array.from(Array(26)).map((e, i) => i + 97);
  const alphabetUpper = alphaUpper.map((x) => String.fromCharCode(x));
  const alphabetLower = alphaLower.map((x) => String.fromCharCode(x));
  const alphabet = [...alphabetLower, ...alphabetUpper].join('');
  const startIndex = alphabet.indexOf(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== alphabet[startIndex + i]) {
      return alphabet[startIndex + i];
    }
  }

  return '';
}

module.exports = findMissingLetter;
