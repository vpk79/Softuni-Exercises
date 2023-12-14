function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermenCount = Number(input[2]);

    let finalPrice = 0;
    let discount = 0;

    switch (season) {
        case "Spring":
            if (fishermenCount <= 6) {
                discount = 0.90;
            } else if (fishermenCount <= 11) {
                discount = 0.85;
            } else {
                discount = 0.75;
            }
            finalPrice = 3000 * discount;

            if (fishermenCount % 2 == 0) {
                finalPrice *= 0.95;
            }
            
            break;

        case "Summer":
            if (fishermenCount <= 6) {
                discount = 0.90;
            } else if (fishermenCount <= 11) {
                discount = 0.85;
            } else {
                discount = 0.75;
            }
            finalPrice = 4200 * discount;
            
            if (fishermenCount % 2 == 0) {
                finalPrice *= 0.95;
            }
            
            break;

        case "Autumn":
            if (fishermenCount <= 6) {
                discount = 0.90;
            } else if (fishermenCount <= 11) {
                discount = 0.85;
            } else {
                discount = 0.75;
            }

            finalPrice = 4200 * discount;
            break;
        
        case "Winter":
            if(fishermenCount <= 6){
                discount = 0.90;
               } else if (fishermenCount <= 11){
                discount = 0.85;
               } else {
                discount = 0.75;
               }
            finalPrice = 2600 * discount;

            if(fishermenCount % 2 == 0){
               finalPrice *= 0.95;
            }
           
            break;

    }
    if(finalPrice <= budget){
        let sum = budget - finalPrice;
        console.log(`Yes! You have ${sum.toFixed(2)} leva left.`);
    } else {
        let sum = finalPrice - budget;
        console.log(`Not enough money! You need ${sum.toFixed(2)} leva.`);
    }
}


fishingBoat(["2000", "Winter", "12"])
fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);
fishingBoat(["2000", "Winter", "12"]);