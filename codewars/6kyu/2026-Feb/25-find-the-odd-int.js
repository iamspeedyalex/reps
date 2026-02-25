function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    let count = 0;
    
    for (let checkI = 0; checkI <A.length; checkI++) {
      if (A[checkI] === A[i]) {
        count++;
      }
    }
    
    if (count % 2 !== 0) {
      return A[i];
    }
  }
}

/* The naming had me confused while trying to keep up with it for a nested loop as this is my first time thinking with nested loops. I got Claude to help me stay on track. Learning is tough but fun */