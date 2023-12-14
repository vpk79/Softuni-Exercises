function easterParty(input){
    let guestsCount = Number(input[0]);
    let coverPrice = Number(input[1]);
    let budget = Number(input[2]);
    let cakePrice = budget * 0.1;

    if(guestsCount < 10){
        coverPrice = coverPrice;
    } else if(guestsCount <= 15){
        coverPrice = coverPrice * 0.85;

    }else if(guestsCount <= 20){
        coverPrice = coverPrice * 0.80;

    } else {
        coverPrice = coverPrice * 0.75;
    }


    let expenses = guestsCount * coverPrice + cakePrice;

    if(expenses <= budget){
        console.log(`It is party time! ${(budget - expenses).toFixed(2)} leva left.`);
    } else{
        console.log(`No party! ${(expenses - budget).toFixed(2)} leva needed.`);
    }
}




easterParty(["8",
"25",
"340"])

