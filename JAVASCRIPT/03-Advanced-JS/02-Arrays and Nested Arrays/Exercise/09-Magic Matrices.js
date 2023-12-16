function solve(input) {

    let results = [];


    for (let i = 0; i < input.length; i++) {
        let sum = 0;
        let sum2 = 0;

        for (let j = 0; j < input[i].length; j++) {
            sum += input[i][j];
        }

        for (let k = 0; k < input.length; k++) {
            sum2 += input[k][i]
        }

        results.push(sum, sum2)
        
    }

    let avgSum = (results.reduce((a, x) => a + x)) / results.length;
    let final = results.every(x => x == avgSum)
    
    console.log(final);

}

solve(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])

// solve([[11, 32, 45],
// [21, 0, 1],
// [21, 1, 1]])

// solve([[1, 0, 0],
// [0, 0, 1],
// [0, 1, 0]])