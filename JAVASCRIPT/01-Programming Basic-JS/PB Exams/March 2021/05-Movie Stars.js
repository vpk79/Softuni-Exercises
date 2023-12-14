function movieStars(input){
    let index = 0;
    let budget = Number(input[index]);
    index++;
    let actor = input[index];
    index++;

    while(actor !== "ACTION"){

        if(actor.length > 15){
            budget *= 0.80
        } else {
            let reward = Number(input[index]);
            budget -= reward;
            index++;
        }
        
        
        if(budget <= 0){
            break;
        }

        actor = input[index];
        index++;
    }

    if(budget > 0){
        console.log(`We are left with ${budget.toFixed(2)} leva.`);

    } else {
        console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`);
    }
}




movieStars(["170000",
"Ben Affleck",
"40000.50",
"Zahari Baharov",
"80000",
"Tom Hanks",
"2000.99",
"ACTION"])

