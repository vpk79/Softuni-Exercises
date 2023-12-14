function vacation(input) {
    let index = 0;
    let moneyNeeded = Number(input[index]);
    index++;
    let budget = Number(input[index]);
    index++;
    
    let text = input[index];
    index++;
    
    let spendCounter = 0;
    let dayscounter = 0;

    while(budget < moneyNeeded){
        dayscounter++;
        let money = Number(input[index]);
        index++;

        if(text === "spend"){
            spendCounter++;
            budget -= money;

            if(budget < 0){
                budget = 0;
            }

            if(spendCounter == 5){
                break;
            }
        }

        if(text === "save"){
            spendCounter = 0;
            budget += money;
        }

        
        text = input[index];
        index++;



    }
        if(spendCounter){
            console.log("You can't save the money.");
            console.log(`${dayscounter}`);
        }

        if(budget >= moneyNeeded){
            console.log(`You saved the money for ${dayscounter} days.`);
        }

}


vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])





