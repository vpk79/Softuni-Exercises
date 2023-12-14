function tournament(input){
    let index = 0;
    let days = Number(input[index]);
    index++;

    let daysCount = 0;
    let command = input[index];
    index++;

    let winCounter = 0;
    let loseCounter = 0;
    let moneySum = 0;

    let winBuffer = 0;
    let loseBuffer = 0;
    let moneyBuffer = 0;


    while(daysCount < days){
        
        while(command !== "Finish"){

            if(command === "win" || command === "lose")

                switch(command){
                    case "win":
                        moneySum += 20;
                        winCounter++;
                        break;
                    
                    case "lose":
                        loseCounter++;
                        break;
            }

            command = input[index];
            index++;
            
        }
        if(winCounter > loseCounter){
            moneySum *= 1.10;
            moneyBuffer += moneySum;
            winBuffer += winCounter;
            loseBuffer += loseCounter;

            moneySum = 0;
            winCounter = 0;
            loseCounter= 0;

        } else{
            moneyBuffer += moneySum;
            winBuffer += winCounter;
            loseBuffer += loseCounter;

            winCounter = 0;
            loseCounter= 0;
            moneySum = 0;
        }


        command = input[index];
        index++;
        daysCount++;

    }
    
    if(winBuffer > loseBuffer){
        moneyBuffer *= 1.20;
        console.log(`You won the tournament! Total raised money: ${moneyBuffer.toFixed(2)}`);
    }   else{
        console.log(`You lost the tournament! Total raised money: ${moneyBuffer.toFixed(2)}`);
    }


}



tournament(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"])

