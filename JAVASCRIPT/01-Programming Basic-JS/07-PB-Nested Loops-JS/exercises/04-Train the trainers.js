function trainers(input){
    let index = 0;
    let juryCount = Number(input[index]);
    index++;
    let presentation = input[index];
    index++;
    let command = input[index];
    let value = 0;
    let avgValue = 0;
    let valueBuffer = 0;
    let presentationCounter = 0;

    while(command !== "Finish"){
        
        for(let i = 0; i < juryCount; i++){
            value += Number(command);
            valueBuffer += Number(command);
            presentationCounter++;
            avgValue = value / juryCount
            index++;
            command = input[index];
            if(command === "Finish"){
                break;
            }
            
        }

        console.log(`${presentation} - ${avgValue.toFixed(2)}.`);
        
        value = 0;
        if(command !== "Finish"){
            presentation = command;
            index++;
            command = input[index];
        }
        
    }

    let avgPresentationValue = valueBuffer / presentationCounter;
    console.log(`Student's final assessment is ${avgPresentationValue.toFixed(2)}.`);

}

trainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


