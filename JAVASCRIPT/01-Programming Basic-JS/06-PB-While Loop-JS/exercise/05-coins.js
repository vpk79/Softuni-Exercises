function coins(input){
    let changeMoney = Math.floor(Number(input[0]) * 100);
    let coinsCount = 0;

    while(changeMoney > 0){

        if(changeMoney >= 200){
            changeMoney -= 200;
        } else if(changeMoney >= 100){
            changeMoney -= 100;
        } else if(changeMoney >= 50){
            changeMoney -= 50;
        } else if(changeMoney >= 20){
            changeMoney -= 20;
        } else if(changeMoney >= 10){
            changeMoney -= 10;
        } else if(changeMoney >= 5){
            changeMoney -= 5;
        } else if(changeMoney >= 2){
            changeMoney -= 2;
        } else if(changeMoney >= 1){
            changeMoney -= 1;
        }    
        coinsCount ++;                
    }

    console.log(coinsCount);

}


coins(["2.73"])