function findShort(s){
  let words = s.split(' ');
  let minLength = words[0].length; /* Getting the first word's length */
  
  for (let i = 1; i < words.length; i++) {
    if (words[i].length < minLength) {
      minLength = words[i].length;
    }
  }
  
  return minLength;
}

/* words was the array of words. not the words themselves */
/* .split('') individual characters; .split(' ') into words by using a space between the quotations */