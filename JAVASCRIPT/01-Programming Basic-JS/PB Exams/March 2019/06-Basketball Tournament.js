function basketball(input){
    let index = 0;
    let tournament = input[index];
    index++;
    
    let counter = 0;
    let team1Score = 0;
    let team2Score = 0;
    let scoreDifference = 0;
    let matchCounter = 0;
    let overallGames = 0;
    let winCounter = 0;
    let loseCounter = 0;

    while(tournament !== "End of tournaments"){
        let gameNumbers = Number(input[index]);
        overallGames += gameNumbers;
        index++;

        while(counter < gameNumbers){
            team1Score = Number(input[index]);
            index++;
            team2Score = Number(input[index]);
            index++;
            matchCounter++;
            if(team1Score > team2Score){
                winCounter++;
                scoreDifference = team1Score - team2Score;
                console.log(`Game ${matchCounter} of tournament ${tournament}: win with ${scoreDifference} points.`);
            } else {
                loseCounter++;
                scoreDifference = team2Score - team1Score;
                console.log(`Game ${matchCounter} of tournament ${tournament}: lost with ${scoreDifference} points.`);
            } 
            counter++;
        }

        tournament = input[index];
        counter = 0;
        matchCounter = 0;
        index++;
    }

    let winMatches = winCounter / overallGames * 100;
    let loseMatches = loseCounter / overallGames * 100;

    console.log(`${winMatches.toFixed(2)}% matches win`);
    console.log(`${loseMatches.toFixed(2)}% matches lost`);

}

basketball(["Dunkers",
"2",
"75",
"65",
"56",
"73",
"Fire Girls",
"3",
"67",
"34",
"83",
"98",
"66",
"45",
"End of tournaments"])


