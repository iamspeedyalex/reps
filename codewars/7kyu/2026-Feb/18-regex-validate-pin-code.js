function validatePIN (pin) {
  let validLength = pin.length === 4 || pin.length === 6;
  let allNumbers = true;
  
  for (let char of pin) {
    if (!'0123456789'.includes(char)) {
      allNumbers = false;
    }
  }
  
  return validLength && allNumbers;
}

/* "isNaN" failed one of the tests. Changed to being more specific about the digits allowed. Claude said JS might also have been considering a space at the end of one of the tests as the number 0, making it pass when it shouldn't have. */