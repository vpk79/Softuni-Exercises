function travelAgency(input) {
    let townName = input[0];
    let packageType = input[1];
    let haveVIP = input[2];
    let daysToRest = input[3];
    let price = 0;
    let invalidFlag = false;

    if (daysToRest < 1) {
        console.log("Days must be positive number!");
        return;
    }

    if (daysToRest > 7) {
        daysToRest--;
    }

    switch (townName) {
        case "Bansko":
        case "Borovets":

            if (packageType === "withEquipment") {
                price = 100;
                if (haveVIP === "yes") {
                    price *= 0.90;
                }
            } else if (packageType === "noEquipment") {
                    price = 80;
                    if (haveVIP === "yes") {
                        price *= 0.95;
                    }

            } else {
                    invalidFlag = true;
                    break;
                }
            
            break;
        case "Varna":
        case "Burgas":
            if (packageType === "withBreakfast") {
                price = 130;
                if (haveVIP === "yes") {
                    price *= 0.88;
                }
            } else if (packageType === "noBreakfast") {
                price = 100;
                if (haveVIP === "yes") {
                    price *= 0.93;
                }
            } else {
                invalidFlag = true;
                break;
            }

            break;

        default: invalidFlag = true;
            break;
    }
    if (invalidFlag) {
        console.log("Invalid input!");
    } else {
        let finalSum = price * daysToRest;
        console.log(`The price is ${finalSum.toFixed(2)}lv! Have a nice time!`);
    }
}

travelAgency(["Bansko",
"withEquipment",
"no",
"2"])






