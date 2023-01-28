function largest(arr) {
    let largest = arr[0];
    let largestIndex = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (largest < arr[i]) {
            largest = arr[i];
            largestIndex = i;
        }

    }

}




arr = [2, 11, 15, 40, 16, 78, 26, 15, 20];
largest(arr);