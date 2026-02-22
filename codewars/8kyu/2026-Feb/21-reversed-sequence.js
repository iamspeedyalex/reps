const reverseSeq = n => {
  let result = []; /* an empty array to store the numbers */
  
  for (let i = n; i >= 1; i--) {
    result.push(i);
  }
  
  return result;
};

/* "i" in the loop can represent whatever we want it to. I got guidance from Claude as this was the first time I had to use i for something other than the position within the array. It being the first time for knowing to use i-- was no problem. */