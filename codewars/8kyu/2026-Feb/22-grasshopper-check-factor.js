function checkForFactor (base, factor) {
  if (base % factor === 0) {
    return true;
  } else {
    return false;
  }
}

/* If the remainder is 0, then the number is a factor. Oops. The "REMAINDER". My mistake: Not simply zero as the other factor. Need to think: "What's left over?". I simply need to remember it is asking for a different type of answer than typical early math problem style. */