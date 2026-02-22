function greet (name, owner) {
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

/* I made the mistake of using = instead of === for comparison, initially. */