function findSmallestInt(arr) {
    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}

/* If the current index we are at in the array is smaller than the current smallest value, the current value becomes the new smallest value */