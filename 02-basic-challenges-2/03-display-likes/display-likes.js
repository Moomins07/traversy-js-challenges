function displayLikes(arr) {
  let str = '';
  switch (arr.length) {
    case 3:
      str = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
      break;
    case 2:
      str = `${arr[0]} and ${arr[1]} like this`;
      break;
    case 1:
      str = `${arr[0]} likes this`;
      break;
    case 0:
      str = `no one likes this`;
      break;
    default:
      str = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
  }
  return str;
}

module.exports = displayLikes;
