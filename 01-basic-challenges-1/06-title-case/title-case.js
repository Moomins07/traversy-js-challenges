function titleCase(string) {
  return string
    .toLowerCase()
    .split(' ') // splits at the spaces creating array of words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

module.exports = titleCase;
