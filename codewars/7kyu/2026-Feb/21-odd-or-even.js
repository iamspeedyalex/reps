function oddOrEven(array) {
   let sum = 0;
  
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  
  if (sum % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

/* Learning division "/" vs Modulo "%" for seeing if a number ends up with a remainder. Division "/" gives you the result of dividing. Modulo "%" gives you the remainder after dividing. Meaning whatever portion is left out from an awkward division, so to speak. (E.g., 5 % 2 = 1; 6 % 2 = 0.) */