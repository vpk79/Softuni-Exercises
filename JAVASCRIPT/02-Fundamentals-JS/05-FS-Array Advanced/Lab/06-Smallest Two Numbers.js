function smallestOfTwoNumbers(input){
    let sortedArray = input.sort((a, b) => a - b);

    let firstTwoElements = sortedArray.slice(0, 2)

    return firstTwoElements.join(" ");
}

console.log(smallestOfTwoNumbers([30, 15, 50, 5]));
console.log(smallestOfTwoNumbers([3, 0, 10, 4, 7, 3]));