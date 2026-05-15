String.prototype.toAlternatingCase = function() {
    let result = "";

    for (let i = 0; i < this.length; i++) {

        if (this[i] === this[i].toUpperCase()) {
            result += this[i].toLowerCase();
        } else {
            result += this[i].toUpperCase();
        }
    }
    return result;
}

/* Instead of passing the string in, the string itself is the one calling it, like the examples in the instructions showed. Making it use the word "this" as the keyword when a method is called on something in JS */