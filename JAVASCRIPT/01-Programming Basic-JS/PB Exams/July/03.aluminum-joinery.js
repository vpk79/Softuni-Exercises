function aluminiumJoinery(input) {
    let joineryCount = Number(input[0]);
    let joineryType = input[1];
    let deliveryType = input[2];
    let joineryCost = 0;

    switch (joineryType) {

        case "90X130":
            if (joineryCount < 10) {
                console.log("Invalid order");

            } else if (joineryCount > 10 && joineryCount <= 30){
                joineryCost = 110;

            } else if (joineryCount > 30 && joineryCount <= 60) {
                joineryCost = 110 * 0.95;

            } else if (joineryCount > 60) {
                joineryCost = 110 * 0.92;
            }
            break;

        case "100X150":
            if (joineryCount < 10) {
                console.log("Invalid order");
            
            
            } else if (joineryCount > 10 && joineryCount <= 40){
                joineryCost = 140;
            
            } else if (joineryCount > 40 && joineryCount <= 80) {
                joineryCost = 140 * 0.94;

            } else if (joineryCount > 80) {
                joineryCost = 140 * 0.90;
            }
            break;

        case "130X180":
            if (joineryCount < 10) {
                console.log("Invalid order");
                      

            } else if (joineryCount > 10 && joineryCount <= 20){
                joineryCost = 190;
            
            }else if (joineryCount > 20 && joineryCount <= 50) {
                joineryCost = 190 * 0.93;

            } else if (joineryCount > 50) {
                joineryCost = 190 * 0.88;
            }
            break;

        case "200X300":
            if (joineryCount < 10) {
                console.log("Invalid order");

            } else if (joineryCount > 10 && joineryCount <= 25){
                joineryCost = 250;
            
            } else if (joineryCount > 25 && joineryCount <= 50) {
                joineryCost = 250 * 0.91;

            } else if (joineryCount > 50) {
                joineryCost = 250 * 0.86;
            }
            break;
        default: {
            console.log("Invalid order");
        } break;

    }  
       
    

    let totalJoineryCost = joineryCount * joineryCost;

    if (deliveryType === "With delivery") {
        totalJoineryCost += 60;
    }

    if (joineryCount > 99) {
        totalJoineryCost *= 0.96;
    }

    if (joineryCount >= 10) {
        console.log(`${totalJoineryCost.toFixed(2)} BGN`);
    }
}




aluminiumJoinery(["105",
"100X150",
"With delivery"])









