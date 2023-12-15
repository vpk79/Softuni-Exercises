function solve(mainArr, entryPoint, itemType) {

    let elementPrice = mainArr[entryPoint]

    let leftSum;
    let rightSum;

    if (itemType == 'cheap') {

        leftSum = mainArr.filter((x, index) => x < elementPrice && index < entryPoint).reduce((a, x) => a + x, 0)
        rightSum = mainArr.filter((x, index) => x < elementPrice && index > entryPoint).reduce((a, x) => a + x, 0)

    } else {
        leftSum = mainArr.filter((x, index) => x >= elementPrice && index < entryPoint).reduce((a, x) => a + x, 0)
        rightSum = mainArr.filter((x, index) => x >= elementPrice && index > entryPoint).reduce((a, x) => a + x, 0)
    }

    if (leftSum >= rightSum) {
        console.log(`Left - ${leftSum} `);
    } else {
        console.log(`Right - ${rightSum}`);
    }

}

solve([1, 5, 1],
    1,
    "cheap")

solve([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
    7,
    "expensive")
solve([5, 10, 12, 5, 4, 20], 3, "cheap")
