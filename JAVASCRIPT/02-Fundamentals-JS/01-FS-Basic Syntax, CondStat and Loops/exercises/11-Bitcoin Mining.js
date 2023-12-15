function bitcoinMining(input){

  
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;
    let money = 0;
    let bitcoins = 0;
    let bitcoinCounter = 0;
    let bitcoinsPurchased = 0;
    let day = 0;


    for(let i = 0; i < input.length; i++){
        let minedGold = input[i];

        if((i+1) % 3 === 0){
            minedGold *= 0.70;
        }

        money += minedGold * goldPrice;

        if(money >= bitcoinPrice){
            bitcoinCounter++;

            bitcoins = money / bitcoinPrice;
            money = money -  Math.trunc(bitcoins) * bitcoinPrice;

            bitcoinsPurchased += Math.trunc(bitcoins);
             if(bitcoinCounter == 1){
                day = i+1;
             }
        }
    }

    console.log(`Bought bitcoins: ${Math.round(bitcoinsPurchased)}`);
    if(day > 0){
    console.log(`Day of the first purchased bitcoin: ${day}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);

}


// bitcoinMining([100, 200, 300])
bitcoinMining([50, 100]);
// bitcoinMining([3124.15, 504.212, 2511.124])