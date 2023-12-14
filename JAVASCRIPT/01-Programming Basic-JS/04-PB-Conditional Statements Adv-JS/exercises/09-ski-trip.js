function skiTrip(input){
    let days = Number(input[0]);
    let place = input[1];
    let valuation = input[2];

    let nights = days - 1;
    let priceForNight = 0;
    let discount = 0;

    switch(place){
        case "room for one person":
            priceForNight = 18.00;
            discount = 1;
            break;
        case "apartment":
            priceForNight = 25.00;
            if(nights < 10){
                discount = 0.70;
            } else if(nights >= 10 && nights <= 15){
                discount = 0.65;
            } else {
                discount = 0.50;
            }
            break;
        case "president apartment":
            priceForNight = 35.00;
            if(nights < 10){
                discount = 0.90;
            } else if(nights >= 10 && nights <= 15){
                discount = 0.85;
            } else {
                discount = 0.80;
            }
            break;

    }

    let sum = nights * priceForNight;
    let finalSum = sum * discount;

    if(valuation == "positive"){
        finalSum *= 1.25;
    } else {
        finalSum *= 0.90;
    }

    console.log(finalSum.toFixed(2));

}



skiTrip(["12", "room for one person", "positive"])