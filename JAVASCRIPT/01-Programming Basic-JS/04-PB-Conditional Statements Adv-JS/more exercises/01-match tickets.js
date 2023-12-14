function matchTickets(input){
    let budget = Number(input[0]);
    let category = input[1];
    let peopleCount = Number(input[2]);
    let ticketPrice = 0;
    let ticketCost= 0;

    if(peopleCount >= 1 && peopleCount <= 4){
        budget *= 0.25;
    } else if (peopleCount <= 9){
        budget *= 0.40;
    } else if (peopleCount <= 24){
        budget *= 0.50;
    } else if (peopleCount <= 49){
        budget *= 0.60;
    } else if (peopleCount >= 50){
        budget *= 0.75;
    }

    if(category === "VIP"){
        ticketPrice = 499.99;
    } else {
        ticketPrice = 249.99;
    }

    ticketCost = ticketPrice * peopleCount;
    if(ticketCost <= budget){
        let moneyLeft = budget - ticketCost;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else{
        let moneyNeeded = ticketCost - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }



}



matchTickets(["30000","VIP","49"])