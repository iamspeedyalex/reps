function getCount(str) {
  let count = 0;
  for (let char of str) {
    if ('aeiou'.includes(char)) {
      count++;
    }
  }
  return count;
}

/* Even though I understood how the flow of the for loop worked, it took me a second to better understand how "let chat of str" and the "if" line worked. */