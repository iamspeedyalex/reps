function drawStairs(n) {
  let stairs = "";
  
  for (let step = 0; step < n; step++) {
    for (let space = 0; space < step; space++) {
      stairs += " ";
    }
    stairs += "I";
    
    if (step < n - 1) {
      stairs += "\n";
    }
  }
  
  return stairs;
}