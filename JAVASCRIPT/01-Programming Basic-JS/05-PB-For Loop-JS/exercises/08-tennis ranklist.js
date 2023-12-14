function tennisRanklist(input){
    let tmntCount = Number(input[0]);
    let startingPoints = Number(input[1]);
    let seasonPoints = 0;
    let tmntWon = 0;

    for(let i=2; i < tmntCount + 2; i++){
        if(input[i] === "W"){
            seasonPoints += 2000;
            tmntWon ++;
        } else if (input[i] === "F"){
            seasonPoints += 1200;
        } else if (input[i] === "SF"){
            seasonPoints += 720;
        }
    }

    let avgPoints = Math.floor(seasonPoints / tmntCount);
    let pointsSum = seasonPoints + startingPoints;
    let tmntWonPercent = tmntWon / tmntCount * 100;

    console.log(`Final points: ${pointsSum}`);
    console.log(`Average points: ${avgPoints}`);
    console.log(`${tmntWonPercent.toFixed(2)}%`);
}







tennisRanklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])


