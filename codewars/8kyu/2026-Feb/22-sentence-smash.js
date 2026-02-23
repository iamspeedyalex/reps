function smash (words) {
  let result = "";
  
  for (let i = 0; i < words.length; i++) {
    result += words[i];
    
    if (i !== words.length -1) {
      result += " ";
    }
  }
  
  return result;
};

/* Writing the if for not adding the space after the last letter for some reason was really difficult to wrap my head around this morning. */