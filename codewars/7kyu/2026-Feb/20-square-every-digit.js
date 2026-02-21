function squareDigits(num){
  let numStr = String(num);
  let result = '';
  
  for (let i = 0; i< numStr.length; i++) {
    let digit = numStr[i];
    let squared = digit * digit;
    result = result + squared;
  }
  
  return Number(result);
}

/* Claude told me that when we use "*", JS automatically converts it to a number. I.e., "9" * "9" become 9 * 9 = 81.
This was interesting how we needed to make the results a string to ensure they concatenated instead of adding to each other into a new number. Then we still had to convert it back into a number since it wanted the return of an integer instead of a string. */