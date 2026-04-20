function squareSum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] * numbers[i];
        /* squaring the current number by multiplying it by itself, then adding it to the running total */
    }

    return sum;
}