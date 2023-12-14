function hairSalon(input){
    let index = 0;
    let targetMoney = Number(input[index]);
    index++;

    let command = input[index];
    

    let price = 0;
    let type = ""
    let income = 0;

    while(command !== "closed"){

        let service = command;
        
        switch(service){
            case "haircut":
                index++;
                type = input[index];

                if(type === "mens"){
                    price = 15;
                } else if(type === "ladies"){
                    price = 20;
                } else {
                    price = 10;
                }
                break;
            case "color":
                index++;
                type = input[index];

                if(type === "touch up"){
                    price = 20;
                } else {
                    price = 30;
                }
                break;
            
        }
        income += price;
        if(income >= targetMoney){
            console.log(`You have reached your target for the day!`);
            console.log(`Earned money: ${income}lv.`);
            break;
        }
        index++;
        command = input[index];
        
    }

    if(command === "closed"){
        console.log(`Target not reached! You need ${targetMoney - income}lv. more.`);
        console.log(`Earned money: ${income}lv.`);
    }
}




hairSalon(["50",
"color",
"full color",
"haircut",
"ladies"])

