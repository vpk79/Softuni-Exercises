function marinaPets(input){
    let dayCount = Number(input[0]);
    let foodKg = Number(input[1]);
    let dogFoodPerDayKg = Number(input[2]);
    let catFoodPerDayKg = Number(input[3]);
    let turtleFoodPerDayKg = Number(input[4]) / 1000;

    let allEatenFood = dogFoodPerDayKg * dayCount + catFoodPerDayKg * dayCount + turtleFoodPerDayKg * dayCount;

    if (allEatenFood <= foodKg){
        let result = foodKg - allEatenFood;
        console.log(`${Math.floor(result)} kilos of food left.`);
    } else {
        let result = allEatenFood - foodKg;
        console.log(`${Math.ceil(result)} more kilos of food are needed.`);
    }

}



marinaPets(["2", "10", "1", "1", "1200"])