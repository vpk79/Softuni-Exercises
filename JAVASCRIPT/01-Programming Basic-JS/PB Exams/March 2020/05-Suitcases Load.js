function suitcases(input){
    let index = 0;
    let cargoVolume = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let suitcaseCounter = 1;
    let lowspace = false;

    while(command !== "End"){
        let suitcaseVolume = Number(command);
       
        
        if (suitcaseCounter % 3 == 0){
            suitcaseVolume *= 1.10;
        }
        if(cargoVolume >= suitcaseVolume){
        cargoVolume -= suitcaseVolume;
        suitcaseCounter++;

        } else {
            lowspace = true;
            break;
        }

        if(cargoVolume <= 0){
            suitcaseCounter--;
            console.log("No more space!");
            console.log(`Statistic: ${suitcaseCounter} suitcases loaded.`);
            break;
        }
        
        command = input[index];
        
        index++;
    }

    if(command === "End"){
        suitcaseCounter--;
        console.log("Congratulations! All suitcases are loaded!");
        console.log(`Statistic: ${suitcaseCounter} suitcases loaded.`);
    } else if(lowspace){
        suitcaseCounter--;
        console.log("No more space!");
        console.log(`Statistic: ${suitcaseCounter} suitcases loaded.`);
    }

}





suitcases(["550",
"100",
"252",
"72",
"End"])










