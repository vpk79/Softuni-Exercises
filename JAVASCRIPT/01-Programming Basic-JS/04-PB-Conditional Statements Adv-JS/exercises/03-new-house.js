function newHouse(input){
    let flowersType = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);

    let finalPrice = 0;

    switch(flowersType){
        case "Roses":
            finalPrice = flowersCount * 5;

            if(flowersCount > 80){
                finalPrice *= 0.90 
            } break;
        
        case "Dahlias":
            finalPrice = flowersCount * 3.80;

            if(flowersCount > 90){
                finalPrice *= 0.85;
            } break;
        
        case "Tulips":
            finalPrice = flowersCount * 2.80;

            if (flowersCount > 80){
                finalPrice *= 0.85;
            } break;
        
        case "Narcissus":
            finalPrice = flowersCount * 3;

            if (flowersCount < 120){
                finalPrice *= 1.15;

            } break;

        case "Gladiolus":
            finalPrice = flowersCount * 2.50;

            if (flowersCount < 80){
                finalPrice *= 1.20;
            } break;
             

    }
    if(finalPrice <= budget){
        let sum = budget - finalPrice;
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${sum.toFixed(2)} leva left.`);

    } else {
        let sum = finalPrice - budget;
        console.log(`Not enough money, you need ${sum.toFixed(2)} leva more.`);
    }

}



newHouse(["Tulips",

"88",

"260"])