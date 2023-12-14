function nameGame(input) {
    let index = 0;
    let name = input[index];
    index++;
    let command = input[index];

    let score = 0;
    let scoreBuffer = 0;
    let winner = name;

    while (command !== "Stop") {

        for (let i = 0; i < name.length; i++) {
            let num = Number(input[index]);
            let char = name.charCodeAt(i);

            if (num === char) {
                score += 10;
            } else {
                score += 2;
            }
            index++;
        }

        if (scoreBuffer <= score) {
            scoreBuffer = score;
            winner = name;

        } else { break };

        score = 0;
        command = input[index];
        name = input[index];
        index++;
    }

    console.log(`The winner is ${winner} with ${scoreBuffer} points!`);
}





nameGame(["Pesho",
    "124",
    "34",
    "111",
    "97",
    "99",
    "Gosho",
    "98",
    "124",
    "88",
    "76",
    "18",
    "Stop"])


