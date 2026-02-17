function twiceAsOld(dadYearsOld, sonYearsOld) {
  let difference = sonYearsOld * 2 - dadYearsOld;
  
  if (difference < 0) {
    difference = difference * -1;
  }
  
  return difference;
}

/* My mind just refused to comprehend how the difference formula understood the number of years until the dad's age would be twice the sons. I understood the math, but I spent too much time trying to chain the understandings together to truly comprehend it. It doesn't help it was nearly 4 AM. */