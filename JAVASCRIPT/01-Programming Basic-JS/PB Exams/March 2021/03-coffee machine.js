function coffeeMachine(input){
    let drinkType = input[0];
    let sugar = input[1];
    let drinks = Number(input[2]);
    let price = 0;

    switch(drinkType){
        case "Espresso":
            if(sugar === "Without"){
                price = 0.90;
                
            }else if(sugar === "Normal"){
                price = 1;
            }else{
                price = 1.20;
            }
            if(drinks >= 5){
                price *= 0.75;
            }
        break;

        case "Cappuccino":
            if(sugar === "Without"){
                price = 1;
                
            }else if(sugar === "Normal"){
                price = 1.20;
            }else{
                price = 1.60;
            }
            break;
        
        case "Tea":
            if(sugar === "Without"){
                price = 0.50;
                
            }else if(sugar === "Normal"){
                price = 0.60;
            }else{
                price = 0.70;
            }
            break;
    }

    if(sugar === "Without"){
        price *= 0.65;
    }

    let sum = drinks * price;
    if(sum > 15){
        sum *= 0.80;
    }

    console.log(`You bought ${drinks} cups of ${drinkType} for ${sum.toFixed(2)} lv.`);

}




coffeeMachine(["Cappuccino",
"Normal",
"13"])

