function cleverLily(input){
    let age = Number(input[0]);
    let washMashinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let savedMoney = 0;
    let lilyMoneyGift = 10;
    


    for(let i = 1; i <= age; i++){
        if(i % 2 === 0){
            savedMoney += lilyMoneyGift - 1;
            lilyMoneyGift += 10;
        } else {
            savedMoney += toyPrice;
        }
    }

    if(savedMoney >= washMashinePrice){
        console.log(`Yes! ${(savedMoney - washMashinePrice).toFixed(2)}`);
    } else{
        console.log(`No! ${(washMashinePrice - savedMoney).toFixed(2)}`);
    }

}








cleverLily(["21",
"1570.98",
"3"])
