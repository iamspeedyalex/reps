function isIsogram(str){
  let lowerStr = str.toLowerCase();
  let letterSet = new Set(lowerStr);
  return lowerStr.length === letterSet.size;
}

/* Lowercasing the string. Turned it into a "Set" which is a new learned item for me. Comparing the length of the set size and string length to make sure no duplicates removed any letters during Set to ensure it is an isogram of no repeating letters. */