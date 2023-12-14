function club(input){
    let index = 0;
    let expectedIncome = Number(input[index]);
    index++;
    let coctailName = input[index];
    index++;
    let coctailCount = Number(input[index]);
    index++;
    let command = ""
    
    let income = 0;

    while(command !== "Party!"){

        let coctailPrice = coctailName.length;
        let orderPrice = coctailCount * coctailPrice;

        if(orderPrice % 2 !== 0){
            orderPrice *= 0.75;
        }
        income += orderPrice;

        if(income >= expectedIncome){
            console.log(`Target acquired.`);
            console.log(`Club income - ${income.toFixed(2)} leva.`);
            break;
        }

        
        command = input[index];
        coctailName = command;
        index++;
        coctailCount = Number(input[index]);
        index++;
    }

    if(command === "Party!"){
        let shortage = expectedIncome - income;
        console.log(`We need ${shortage.toFixed(2)} leva more.`);
        console.log(`Club income - ${income.toFixed(2)} leva.`);
    }



}




club(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10"])

