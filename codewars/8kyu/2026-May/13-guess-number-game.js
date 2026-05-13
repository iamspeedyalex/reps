class Guesser {
    constructor(number, lives) {
      this.number = number;
      this.lives = lives;
    }
    
    guess(n) {
        if (this.lives === 0) { /* If lives are at zero throw an error */
            throw new Error("No lives left!");
        }

        if (n === this.number) {
            return true;
        }

        this.lives--; /* this.lives-- is apparently a shorter version of this.lives = this.lives -1. apparently not the same as -= similar to += as -- is specifically for subtracting 1. -- for subtracting just 1, and ++ for adding just 1. */
        return false;
    }
  }