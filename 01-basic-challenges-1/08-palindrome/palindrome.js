function isPalindrome(str) {
  let normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  return normalizedStr === normalizedStr.split('').reverse().join('');
}

module.exports = isPalindrome;
