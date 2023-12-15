function ladybugs(input) {
    let fieldSize = Number(input[0]);
    let field = [];

    for (let i = 0; i < fieldSize; i++) {
        field.push(0);
    }

    let bugs = input[1].split(" ")

    for (let i = 0; i < bugs.length; i++) {
        let bugIndex = Number(bugs[i]);
        if (bugIndex >= 0 && bugIndex < fieldSize) {
            field[bugIndex] = 1;
        }
    }

    for (let i = 2; i < input.length; i++) {
        let bugsMove = input[i].split(" ");
        let bugToMove = Number(bugsMove[0]);
        let direction = bugsMove[1];
        let moveLength = Number(bugsMove[2]);

        if (field[bugToMove] !== 1 || bugToMove >= field.length || bugToMove < 0) {
            continue;
        }

        if (moveLength < 0) {
            moveLength = Math.abs(moveLength);
            if (direction === 'right') {
                direction = 'left';
            } else if (direction === 'left') {
                direction = 'right';
            }
        }

        field[bugToMove] = 0;

        if (direction === "right") {

            let newPosition = bugToMove + moveLength;

            if (field[newPosition] === 1) {
                newPosition += moveLength;
            }

            if (newPosition <= field.length) {
                field[newPosition] = 1;
            }
        } else {
            let newPosition = bugToMove - moveLength;

            if (field[newPosition] === 1) {
                newPosition -= moveLength;
            }

            if (newPosition >= 0) {
                field[newPosition] = 1;
            }
        }
    }
    console.log(field.join(" "));
}



ladybugs([
    3, '0 1',
    '0 right 1',
    '2 right 1'])
// ladybugs([ 3, '0 1 2',
// '0 right 1',
// '1 right 1',
// '2 right 1'])

// ladybugs([5, '3',
//     '3 left 2',
//     '1 left -2'])