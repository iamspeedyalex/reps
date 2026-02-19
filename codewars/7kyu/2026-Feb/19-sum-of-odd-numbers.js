function rowSumOddNumbers(n) {
	let firstNumber = n * n - n + 1;
  let sum = 0;
  
  for (let i = 0; i < n; i++) {
    let currentNumber = firstNumber + (i * 2);
    sum = sum + currentNumber;
  }
  
  return sum;
}

/* I definitely received assistance in figuring this out. My mind just wouldn't grasp it, and Claude even struggled in not being overly vague or jumping to vast overcomplication. */

function rowSumOddNumbers(n) {
  return n * n * n;
}

/* This second solution shared here is the most simple I could get from Claude and it actually makes more sense to my thinking. I didn't figure it on my own at all, though. */