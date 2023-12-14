function basketball(input){
    let index = 0;
    let tournament = input[index];
    index++;
    let matches = Number(input[index]);
    index++;
    let command = input[index];
    let counterWins = 0;
    let counterLoses = 0;
  


    while(command !== "End of tournaments"){
         
        

        let team1 = 0;
        let team2 = 0;

        for(let i = 1; i <= matches; i++){
            team1 = Number(input[index]);
            index++;
            team2 = Number(input[index]);
            index++;

            

            if(team1 > team2){
                console.log(`Game ${i} of tournament ${tournament}: win with ${team1 - team2} points.`);
                counterWins++;
            } else {
                console.log(`Game ${i} of tournament ${tournament}: lost with ${team2 - team1} points.`);
                counterLoses++;
            }
        }

        tournament = input[index];
        if(tournament === "End of tournaments"){
            break;
        }
        index++;
        matches = Number(input[index]);
        index++;
        command = input[index];




    }

    let allGames = counterLoses + counterWins;
    let winsPercent = counterWins / allGames * 100;
    let losesPercent = counterLoses / allGames * 100
    console.log(`${winsPercent.toFixed(2)}% matches win`);
    console.log(`${losesPercent.toFixed(2)}% matches lost`);
}



basketball(["Ballers",
"3",
"87",
"63",
"56",
"65",
"75",
"64",
"Sharks",
"4",
"64",
"76",
"65",
"86",
"68",
"99",
"45",
"78",
"End of tournaments"]) 

