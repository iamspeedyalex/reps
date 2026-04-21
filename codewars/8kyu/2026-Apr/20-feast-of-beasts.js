function feast(beast, dish) {
    if (beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]) {
      return true;
    } else {
      return false;
    }
  }

/* 
Best practices note: realized I could have just done return for the main line instead of the if else
*/