let arr = [1, 2, 3, 4, 5];

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

console.log(sum(arr)); // Output: 15
