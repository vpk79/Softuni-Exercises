function bestPlayer(input) {
    let index = 0;
    let player = input[index];
    index++;

    let scores = 0;
    let buffer = 0;
    let hattrick = false;
    let bestPlayer = player;


    while (player !== "END") {

        scores = Number(input[index]);
        index++;

        if (scores < 3) {
            if (scores > buffer) {
                buffer = scores;
                bestPlayer = player;
            }

        } else if (scores < 10) {
            hattrick = true;
            if (scores > buffer) {
                buffer = scores;
                bestPlayer = player;
            }

        } else {
            hattrick = true;
            buffer = scores;
            bestPlayer = player;
            break;
        }


        player = input[index];
        index++;

    }

    console.log(`${bestPlayer} is the best player!`);

    if (hattrick) {
        console.log(`He has scored ${buffer} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${buffer} goals.`);
    }

}



bestPlayer(["Neymar",
"2",
"Ronaldo",
"1",
"Messi",
"3",
"END"])






