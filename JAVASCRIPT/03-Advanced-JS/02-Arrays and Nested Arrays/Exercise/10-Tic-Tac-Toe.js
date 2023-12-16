function solve(input){

    let dashboard = [[false, false, false],[false, false, false],[false, false, false]];
    let counter = 0;
    let player;
    let win = false;
    let endGame = false;
    let buffer = [];

    for(let line of input){
        if(win || endGame) break;
        
        let [index1, index2] = line.split(" ").map(Number);
        counter % 2 == 0 ? player = 'X' : player = 'O'
       
        if(dashboard[index1][index2] === false){
            dashboard[index1][index2] = player;
            counter++;
        } else{
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        for(let i = 0; i < dashboard.length; i++){
            win = dashboard[i].every(x => x == dashboard[i][0] && x !== false);
            if(win) break;

            for(let k = 0; k < dashboard.length; k++){
                let el = dashboard[k][i]
                buffer.push(el);
            }

            win = buffer.every(x => x == buffer[0] && x !== false);
            if(win)break;

            buffer = [];

            buffer.push(dashboard[0][0], dashboard[1][1], dashboard[2][2]) //left diagonal

            win = buffer.every(x => x == buffer[0] && x !== false);
            if (win) break;

            buffer = [];

            buffer.push(dashboard[0][2], dashboard[1][1], dashboard[2][0]) //right diagonal

            win = buffer.every(x => x == buffer[0] && x !== false);
            if (win) break;

            buffer = [];

            endGame = dashboard.flat().every(x => x !== false);
        }
    }


    if(win){
        console.log(`Player ${player} wins!`);
        dashboard.forEach(x => console.log(x.join("\t")))
    } else{
        console.log("The game ended! Nobody wins :(");
        dashboard.forEach(x => console.log(x.join("\t")))
    }

}

// [[false, false, false],
// [false, false, false],
// [false, false, false]]


// solve([
//     "0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 1",
//     "1 2",
//     "2 2",
//     "2 1",
//     "0 0"])


// solve(["0 0",
//     "0 0",
//     "1 1",
//     "0 1",
//     "1 2",
//     "0 2",
//     "2 2",
//     "1 2",
//     "2 2",
//     "2 1"])

// solve(["0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 2",
//     "1 1",
//     "2 1",
//     "2 2",
//     "0 0"]
// )