function gameOfIntervals(input){
    let gameMoves = Number(input[0]);
    let result = 0;
    let counter0To9 = 0;
    let counter10To19 = 0;
    let counter20To29 = 0;
    let counter30To39 = 0;
    let counter40To50 = 0;
    let counterInvalidNumbers = 0;

    for(let i = 1; i < gameMoves +1; i++){
        let num = Number(input[i]);

        if (num < 0 || num > 50){
            result /= 2;
            counterInvalidNumbers++;
        } else if (num <=9){
            result += num * 0.2;
            counter0To9++;
        } else if (num <= 19){
            result += num * 0.3;
            counter10To19++;
        } else if (num <= 29){
            result += num * 0.4;
            counter20To29++;
        } else if (num <= 39){
            result += 50;
            counter30To39++
        } else {
            result += 100;
            counter40To50++
        }

    }

    counterInvalidNumbers = counterInvalidNumbers / gameMoves * 100;
    counter0To9 = counter0To9 / gameMoves * 100;
    counter10To19 = counter10To19 / gameMoves * 100;
    counter20To29 = counter20To29 / gameMoves * 100;
    counter30To39 = counter30To39 / gameMoves * 100;
    counter40To50 = counter40To50 / gameMoves * 100;

    console.log(result.toFixed(2));
    console.log(`From 0 to 9: ${counter0To9.toFixed(2)}%`);
    console.log(`From 10 to 19: ${counter10To19.toFixed(2)}%`);
    console.log(`From 20 to 29: ${counter20To29.toFixed(2)}%`);
    console.log(`From 30 to 39: ${counter30To39.toFixed(2)}%`);
    console.log(`From 40 to 50: ${counter40To50.toFixed(2)}%`);
    console.log(`Invalid numbers: ${counterInvalidNumbers.toFixed(2)}%`);

}



gameOfIntervals(["10","43","57","-12","23","12","0","50","40","30","20"])