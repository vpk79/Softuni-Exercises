function dishwasher(input){
    let index = 0;
    let preparation = Math.floor(Number(input[index]) * 750);
    index++

    let dishes = 0;
    let command = "";
    let dishesConsumation = 5;
    let potsConsumation = 15;
    let cycleCounter = 1;
    let potCounter = 0;
    let dishesCounter = 0;

    while(preparation >= 0){

        command = input[index];

        if(command === "End"){
            break;
        }
        dishes = Number(input[index]);
        if(cycleCounter % 3 == 0){
            potCounter += dishes;
            dishes *= potsConsumation;
        } else {
            dishesCounter += dishes;
            dishes *= dishesConsumation;
        }

        preparation -= dishes;

        cycleCounter++;
        index++;

    }

    if(command === "End"){
        console.log("Detergent was enough!");
        console.log(`${dishesCounter} dishes and ${potCounter} pots were washed.`);
        console.log(`Leftover detergent ${preparation} ml.`);
    } else {
        console.log(`Not enough detergent, ${Math.abs(preparation)} ml. more necessary!`);
    }
}


// dishwasher(["2","53","65","55","End"])
dishwasher(["1","10","15","10","12","13","30"])