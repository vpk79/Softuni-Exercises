function buildAWall(input) {

    let avgHeight = input.reduce((a, b) => a + b) / input.length
    let dayCounter = 0;
    let sum = 0;
    let daySum = [];

    while (avgHeight < 30) {
        let footCounter = 0;

        for (let i = 0; i < input.length; i++) {
            let height = input[i];
            if (height < 30) {
                build(height, i)
                footCounter++;
            }

        }

        sum += footCounter * 195;
        daySum.push(footCounter * 195);


        dayCounter++;
        avgHeight = input.reduce((a, b) => a + b) / input.length
    }


    function build(height, index) {
        input[index] = height + 1;
    }

    console.log(daySum.join(", "));
    console.log(sum * 1900 + ' pesos');
}



buildAWall([17, 22, 17, 19, 17])
buildAWall([21, 25, 28])
buildAWall([17])