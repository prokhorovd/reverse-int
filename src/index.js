module.exports = function reverse (n) {
  let numberAsString = n.toString();
  let reversedInt = "";
  for (let i = 0; i < numberAsString.length; i++) {
    if (numberAsString[i] === "-") {
      i += 1;  
    }
    reversedInt = numberAsString[i] + reversedInt;
  }
  return reversedInt;
}
