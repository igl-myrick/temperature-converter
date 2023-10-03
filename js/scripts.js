function fToC(userNum) {
  const fConvertedNum = (userNum - 32) * (5 / 9);
  return fConvertedNum;
}

function cToF(userNum) {
  const cConvertedNum = (userNum * (9 / 5)) + 32;
  return cConvertedNum;
}

const userNum = parseInt(prompt("Enter a temperature to convert:"));

window.alert(userNum + " Fahrenheit is equal to " + fToC(userNum).toFixed(2) + " Celsius. " + userNum + " Celsius is equal to " + cToF(userNum).toFixed(2) + " Fahrenheit.");