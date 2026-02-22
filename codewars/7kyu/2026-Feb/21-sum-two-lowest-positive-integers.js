function sumTwoSmallestNumbers(numbers) {  
  numbers.sort(function(a, b) {
    return a - b;
  });
  
  return numbers[0] + numbers[1];
}

/* .sort sorts as strings. Not as numbers like I thought. We give .sort a function to override the default string behavior. .sort() method does multiple comparisons to arrange in order automatically. Knows internally when no more swaps are needed. */