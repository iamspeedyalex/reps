function findAverage(array) {
    if (array.length === 0) return 0;
    let sum = 0;
    
    for (let n of array) {
        sum += n;
    }
    
    return sum / array.length;
}

/* for let instead of the let i = 0... kind. does the same thing? */