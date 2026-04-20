function squareSum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] * numbers[i];
        /* squaring the current number by multiplying it by itself, then adding it to the running total */
    }

    return sum;
}

/* Best practices note #1: 
function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}
  starting to learn about callback functions cuz of this. was confused at first, since saw function within a function. with the 0 being the starting value for sum
*/

/* Best practices note #2: 
function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}
  a shorter way to write it
*/