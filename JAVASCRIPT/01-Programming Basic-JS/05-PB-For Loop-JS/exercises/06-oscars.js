function oscars(input){
    let actorName = input[0];
    let academyScore = Number(input[1]);
    let valuetorsCount = Number(input[2]);
    let nameLength = 0;
    let valuation = 0;
   

    for(let i = 3; i < input.length; i+=2){
       
            nameLength = input[i].length;
            valuation = Number(input[i+1]);
        
        academyScore += (nameLength * valuation) / 2;

        if(academyScore > 1250.5){
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyScore.toFixed(1)}!`);
            return;
            }
        }
        
    console.log(`Sorry, ${actorName} you need ${(1250.5 - academyScore).toFixed(1)} more!`);
}



oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

