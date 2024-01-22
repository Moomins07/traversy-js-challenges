function validateEmail(string) {
  if (string[0] === '@') {
    return false;
  }

  const regex = /^(?=.*@)(?=.*\.).*$/;
  const testEmail = regex.test(string);
  return testEmail;
}

module.exports = validateEmail;
