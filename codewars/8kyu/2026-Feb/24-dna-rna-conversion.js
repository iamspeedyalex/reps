function DNAtoRNA(dna) {
  let result = "";
  
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      result += "U";
    } else {
      result += dna[i];
    }
  }
  
  return result;
}

/* The result is a new string based on how the for loop read the string with our given instructions. The original string never changes in JS, in general */