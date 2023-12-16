function solve(input) {
        let arr = input.reduce((a, x) => {
            if (x >= a[a.length -1]) {
                a.push(x)
            }
            return a;
        },[input.shift()])
    return(arr);
}




console.log(solve([1,
    3,
    8,
    4, 10,
    12,
    3,
    2,
    24]))

// solve([1,
//     2,
//     3,
//     4])


console.log(solve([20,
    3,
    2,
    15,
    6,
    1]
))