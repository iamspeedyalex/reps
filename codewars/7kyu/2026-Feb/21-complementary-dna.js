function dnaStrand(dna){
  let result = "";
  let dnaArray = dna.split('');
  
  for (let i = 0; i < dnaArray.length; i++) {
    let letter = dnaArray[i];
  
    if (letter === "A") {
      result += "T";
    } else if (letter === "T") {
      result += "A";
    } else if (letter === "C") {
      result += "G";
    } else {
      result += "C";
    }
  }
  
  return result;
}

/* I made the mistake of initially placing the if statement outside of the for loop by closing the for loop too early with the curly braces. */