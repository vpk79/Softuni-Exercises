function sumFirstAndLast(input){
    let firstNumber = Number(input.shift());
    let lastNumber = Number(input.pop());

    let sum = firstNumber + lastNumber;
    
    return(sum);
}

console.log(sumFirstAndLast(['20', '30', '40']))
console.log(sumFirstAndLast(['5', '10'] ));