function diceGameSimulation(numSimulations) {
  const arr = [];

  function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  for (let i = 0; i < numSimulations; i++) {
    const dice1 = getRandomNumber();
    const dice2 = getRandomNumber();
    const sum = dice1 + dice2;
    let result = null;

    switch (sum) {
      case 2:
      case 3:
      case 12:
        result = 'lose';
        break;
      case 7:
      case 11:
        result = 'win';
        break;
      default:
        result = 'roll again';
    }
    arr.push({
      dice1,
      dice2,
      sum,
      result,
    });
  }

  return arr;
}

module.exports = diceGameSimulation;
