function kthLargest(arr, k) {
    let left = 0;
    let right = arr.length - 1;
    // [3, 1, 2, 2]
    // [1, 2, 2, 3]     k = 3     swaps = 2
    // [1, 2, 2, 3]
    // [3,2,1,4,5,6] k = 3      length - k = 3
    // [3,2,3,1,2,4,5,5,6] k = 4
    r
    /*
	
    */
    while (left < right) {
        if (arr[left] > arr[right]) {
            [arr[left], arr[right]] = [arr[right], arr[left]];

        }
        left++;
    }
    return arr[arr.length - k];

}


console.log(kthLargest([1,3,2,1]))