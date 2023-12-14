function addBags(input){
    let luggageTaxOver20Kg = Number(input[0]);
    let luggageKilos = Number(input[1]);
    let tripDays = Number(input[2]);
    let luggageCount = Number(input[3]);

    let luggageTax = 0;

    if(luggageKilos < 10){
        luggageTax = luggageTaxOver20Kg * 0.20;

    } else if (luggageKilos <= 20){
        luggageTax = luggageTaxOver20Kg * 0.50;
    } else if (luggageKilos > 20) {
        luggageTax = luggageTaxOver20Kg;
    }

    if(tripDays < 7){
        luggageTax *= 1.40;
    } else if(tripDays <= 30){
        luggageTax *= 1.15;
    } else if (tripDays > 30) {
        luggageTax *= 1.10;
    }

    let luggageSum = luggageCount * luggageTax;

    console.log(`The total price of bags is: ${luggageSum.toFixed(2)} lv.`);
}


addBags(["25.50",
"5",
"36",
"6"])

