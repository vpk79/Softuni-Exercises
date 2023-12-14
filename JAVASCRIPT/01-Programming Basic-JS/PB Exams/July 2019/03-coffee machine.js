function coffeeMachine(input){
    let drinkType = input[0];
    let sugar = input[1];
    let drinksCount = Number(input[2]);
    let price = 0;

    switch (drinkType) {
        case "Espresso":
            switch (sugar) {
                case "Without": 
                    price = 0.90;
                    break;
                case "Normal":
                    price = 1;
                    break;
                case "Extra":
                    price = 1.20;
                    break;
            }
            break;
    
       case "Cappuccino":
            switch (sugar) {
                case "Without": 
                    price = 1;
                    break;
                case "Normal":
                    price = 1.20;
                    break;
                case "Extra":
                    price = 1.60;
                    break;
            }
        break;


        case "Tea":
            switch (sugar) {
                case "Without": 
                    price = 0.50;
                    break;
                case "Normal":
                    price = 0.60;
                    break;
                case "Extra":
                    price = 0.70;
                    break;
            }
            break;
            
    }

    if(sugar === "Without"){
        price *= 0.65;
    }

    if(drinkType === "Espresso" && drinksCount >= 5){
        price *= 0.75;
    }

    price = price * drinksCount;

    if(price > 15){
        price *= 0.80
    }

   
    
    console.log(`You bought ${drinksCount} cups of ${drinkType} for ${price.toFixed(2)} lv.`);
}







coffeeMachine(["Tea",
"Extra",
"3"])


