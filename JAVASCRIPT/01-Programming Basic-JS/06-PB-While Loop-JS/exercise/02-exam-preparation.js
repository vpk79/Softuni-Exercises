function examPreparation(input){
    let index = 0;
    let negativeValuations = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let valuation = Number(input[index]);
    index++;
    let negativeCounter = 0;
    let scores = 0;
    let taskCounter = 0;
    let lasttask = "";

    while(command !== "Enough"){

        taskCounter++;
        scores += valuation;
        lasttask = command;


        if(valuation <= 4){
            negativeCounter++;
            if(negativeCounter == negativeValuations){
                console.log(`You need a break, ${negativeCounter} poor grades.`);
                break;
            }
           
        }


        
        command = input[index];
        valuation = Number(input[index+1]);
        index += 2;
    }

    if(negativeCounter < negativeValuations){

    let avgScore = scores / taskCounter;
    console.log(`Average score: ${avgScore.toFixed(2)}`);
    console.log(`Number of problems: ${taskCounter}`);
    console.log(`Last problem: ${lasttask}`);
    }
}





examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

