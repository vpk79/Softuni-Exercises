function energyBoosters(input){
    let fruit = input[0];
    let packageSize = input[1];
    let packageCount = Number(input[2]);

    let packagePrice = 0;

    switch(fruit){
        case "Watermelon":
            if (packageSize == "small"){
                packagePrice = 56;
            } else {
                packagePrice = 28.70;
            }
            break;
        
        case "Mango":
            if (packageSize == "small"){
                packagePrice = 36.66;
            } else {
                packagePrice = 19.60;
            }
            break;

        case "Pineapple":
            if (packageSize == "small"){
                packagePrice = 42.10;
            } else {
                packagePrice = 24.80;
            }
            break;

        case "Raspberry":
            if (packageSize == "small"){
                packagePrice = 20;
            } else {
                packagePrice = 15.20;
            }
            break;

    }

    let packageSum = 0;
    if(packageSize === "small"){
        packageSum = packageCount * packagePrice * 2;
    } else {
        packageSum = packageCount * packagePrice * 5;
    }

    if(packageSum >= 400 && packageSum <= 1000){
        packageSum *= 0.85;
    } else if (packageSum > 1000){
        packageSum *= 0.50;
    }

    console.log(`${packageSum.toFixed(2)} lv.`);
}



energyBoosters(["Watermelon",
"big",
"4"])

