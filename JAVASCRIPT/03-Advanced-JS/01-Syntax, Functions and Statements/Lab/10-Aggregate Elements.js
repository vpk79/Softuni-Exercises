function solve(input) {

    let sum = input.reduce((a, x) => a + x, 0);
    let inverse = input.reduce((a, x) => a + 1 / x, 0);
    let concat = input.reduce((a, x) => a + x, "");

    console.log(sum);
    console.log(inverse);
    console.log(concat);
}


solve([1, 2, 3])