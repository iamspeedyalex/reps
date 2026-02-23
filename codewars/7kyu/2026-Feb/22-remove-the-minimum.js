function removeSmallest(numbers) {
  
  /* For getting an empty array back if the array list has nothing in it. */
  if (numbers.length === 0) {
    return [];
  }
  
  /* Looking for the smallest number in the array */
  let min = numbers[0];
  
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  
  /* Finding the first location within the array the smallest number appears */
  let minIndex = numbers.indexOf(min); /* indexOf finds the first position (index) where a value appears in an array */
  
  /* Making the array without the first of the smallest number included */
  let result = [];
  
  for (let i = 0; i < numbers.length; i++) {
    if (i !== minIndex) { /* !== not equal to */
      result.push(numbers[i]);
    }
  }
  
  return result;
}

/* I like the idea of assuming the first number is the smallest then using to compare the others, and replacing upon finding a more appropriate lowest number. */