function hoopCount (n) {
   if (n >= 10) {
     return "Great, now move on to tricks";
    } else {
      return "Keep at it until you get it";
    }
}

/* I made the mistake of using === instead of >= as I'd forgotten I wasn't just trying to check if equal to ten, but more than or equal to. */