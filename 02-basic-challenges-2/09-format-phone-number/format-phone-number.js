function formatPhoneNumber(numArray) {
  numArray.splice(6, 0, '-');
  const numString = numArray.join('');
  const slice1 = numString.slice(0, 3);
  const slice2 = numString.substring(3);

  return `(${slice1}) ${slice2}`;
}

module.exports = formatPhoneNumber;
