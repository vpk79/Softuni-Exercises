function firstAndLastKnumbers(input){
    let num = input[0];

    let firstElements = input.slice(1, num + 1);
    let lastElements = input.slice(input.length - num);

    return (firstElements.join(" ") + '\n' + lastElements.join(" "));
}


console.log(firstAndLastKnumbers([2, 7, 8, 9]));
console.log(firstAndLastKnumbers([3, 6, 7, 8, 9]));