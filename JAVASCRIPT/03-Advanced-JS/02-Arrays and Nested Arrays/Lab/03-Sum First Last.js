function solve(input){

    input = input.map(Number);
    return input.shift() + input.pop()
}


console.log(solve(['20', '30', '40']))
console.log(solve(['5', '10']))



