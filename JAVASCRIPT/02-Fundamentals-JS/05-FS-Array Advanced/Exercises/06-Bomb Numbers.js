function bombNumbers(arr1, arr2) {
    let [bomb, power] = arr2;

    while (arr1.includes(bomb)) {
        let bombIndex = arr1.indexOf(bomb);
        let startIndex = bombIndex - power;
        let endIndex = power * 2 + 1;
        if (startIndex < 0) {
            startIndex = 0;
        }
        if (startIndex + endIndex > arr1.length) {
            endIndex = arr1.length - startIndex;
        }

        arr1.splice(startIndex, endIndex)
    }

    let sum = arr1.reduce((a, b) => a + b);

    return sum;
}



console.log(bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]));
console.log(bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]));
console.log(bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]));
console.log(bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]));
console.log(bombNumbers([2, 2,2,2,2,2,2,2], [2, 5]));