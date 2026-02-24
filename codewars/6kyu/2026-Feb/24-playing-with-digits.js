function digPow(n, p){
  
  /* Converting the number to a string to access individual digits */
  let nStr = n.toString(); /* In JavaScript, we cannot split a number directly. */
  let totalSum = 0;
  
  /* Looping through each digit */
  for (let i = 0; i < nStr.length; i++) {
    let digit = Number(nStr[i]); /* Converting the current character back to a number */
    totalSum += Math.pow(digit, p + i); /* Raising the digit to the consecutive power (p + i) and adding to the total */
  }
  
  /* Checking if the total sum is divisible by the original number (n) */
  if (totalSum % n === 0) { /* Checking if there is a remainder when dividing the totalSum by the original number n (example from instruction: 695. meaning the original full number being checked) */
    return totalSum /n;
  } else {
    return -1;
  }
}

/* This took some guidance to understanding the problem from Gemini. Primarily understanding steps of thinking in approaching these instructions. It has been a while since I had to think like this. */