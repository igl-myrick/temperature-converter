function fToC(userNum) {
  const convertedNum = userNum - 32 / (9 / 5);
  return convertedNum;
}

const userNum = parseInt(prompt("Enter your temperature:"));

window.alert(userNum + " Fahrenheit is equal to " + fToC(userNum).toFixed(2) + " Celsius.");