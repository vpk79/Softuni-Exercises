function fitness(input){
    let budget = Number(input[0]);
    let gender =  input[1];
    let age = Number(input[2]);
    let sport = input[3];
    let cardPrice = 0;

    switch(sport){
        case "Gym":
            if(gender === "m"){
                cardPrice = 42;
            } else {
                cardPrice = 35;
            }
            break;
        case "Boxing":
            if(gender === "m"){
                cardPrice = 41;
            } else {
                cardPrice = 37;
            }
            break;
        
        case "Yoga":
            if(gender === "m"){
                cardPrice = 45;
            } else {
                cardPrice = 42;
            }
            break;
        
        case "Zumba":
            if(gender === "m"){
                cardPrice = 34;
            } else {
                cardPrice = 31;
            }
            break;

        case "Dances":
            if(gender === "m"){
                cardPrice = 51;
            } else {
                cardPrice = 53;
            }
            break;

        case "Pilates":
            if(gender === "m"){
                cardPrice = 39;
            } else {
                cardPrice = 37;
            }
            break;
    }

    if(age <= 19){
        cardPrice *= 0.80;
    }

    if(cardPrice <= budget){
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        console.log(`You don't have enough money! You need $${(cardPrice - budget).toFixed(2)} more.`);
    }
}



fitness(["10",
"m",
"50",
"Pilates"])


