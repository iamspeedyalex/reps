function getAverage(marks){
  let sum = 0; /* creating variable to keep the running total */
  
  for (let i = 0; i < marks.length; i++) { /* loops through every item in the array one by one */
    sum += marks[i]; /* adds the current mark to the running total each time the loop runs */
  }
  
  let average = sum / marks.length;
  
  return Math.floor(average); /* rounding down to nearest whole number */
}