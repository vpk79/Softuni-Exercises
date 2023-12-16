function solve(input) {

    let counter = 0;

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            let checkNum = input[i][j];
            if (i < input.length - 1) {
                if (checkNum === input[i + 1][j] && checkNum === input[i][j + 1]){
                    counter += 2;

                } else if (checkNum === input[i + 1][j] || checkNum === input[i][j + 1]){
                    counter++;
                } 

            } else {
                if (checkNum === input[i][j + 1]) {
                    counter++;
                }

            }
        }
    }

    console.log(counter);
}




// solve([
// ['2', '3', '4', '7', '0'],
// ['4', '0', '5', '3', '4'],
// ['2', '3', '5', '4', '2'],
// ['9', '8', '7', '5', '4']])

// solve([['test', 'yes', 'yo', 'ho'],
// ['well', 'done', 'yo', '6'],
// ['not', 'done', 'yet', '5']])


solve([
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']])