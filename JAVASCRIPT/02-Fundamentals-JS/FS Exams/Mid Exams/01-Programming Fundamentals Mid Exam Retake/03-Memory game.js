function memoryGame(input) {
    let mainArray = input.slice();
    let firstArray = mainArray.shift().split(" ");
    let counter = 0;

    for (const el of mainArray) {
        if (el === "end") break;
        counter++;

        let arrayOfEl = el.split(" ").map(x => x = Number(x));
        let [index1, index2] = arrayOfEl;
        if (firstArray.length > 0) {
            if (index1 < 0 || index1 >= firstArray.length || index2 < 0 || index2 >= firstArray.length || index1 == index2) {
                console.log("Invalid input! Adding additional elements to the board");
                let arrayAvg = Math.floor(firstArray.length / 2);
                let newElement = (`-${counter}a`);
                firstArray.splice(arrayAvg, 0, newElement, newElement);
                continue;
            }

            if (firstArray[index1] === firstArray[index2]) {
                console.log(`Congrats! You have found matching elements - ${firstArray[index1]}!`);

                if (index1 > index2) {
                    firstArray.splice(index1, 1);
                    firstArray.splice(index2, 1);
                } else if (index2 > index1) {
                    firstArray.splice(index2, 1);
                    firstArray.splice(index1, 1);
                }


                if (firstArray.length == 0) {
                    console.log(`You have won in ${counter} turns!`);
                    return;
                }

            } else {
                console.log("Try again!");
            }
        }
    }

    console.log("Sorry you lose :(")
    console.log(`${firstArray.join(" ")}`);

}


memoryGame( [
"1 1 2 2 3 3 4 4 5 5", 
"1 0",
"-1 0",
"1 0", 
"1 0", 
"1 0", 
"end"
]
)

// memoryGame([
//     "a 2 4 a 2 4", 
//     "0 3", 
//     "0 2",
//     "0 1",
//     "0 1", 
//     "end"
//     ]
//     )

// memoryGame([
//     "a 2 4 a 2 4",
//     "4 0",
//     "0 2",
//     "0 1",
//     "0 1",
//     "end"
// ])