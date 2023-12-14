function easterGuests(input){
    let guestsCount = Number(input[0]);
    let budget = Number(input[1]);

    let cakesCount = Math.ceil(guestsCount / 3);
    let eggCount = guestsCount * 2;

    let cakesPrice = cakesCount * 4;
    let eggPrice = eggCount * 0.45;

    let expenses = cakesPrice + eggPrice;

    if(expenses <= budget){
        console.log(`Lyubo bought ${cakesCount} Easter bread and ${eggCount} eggs.`);
        console.log(`He has ${(budget - expenses).toFixed(2)} lv. left.`);
    } else {
        console.log(`Lyubo doesn't have enough money.`);    
        console.log(`He needs ${(expenses - budget).toFixed(2)} lv. more.`);
    }

}




easterGuests(["9",
"12"])

