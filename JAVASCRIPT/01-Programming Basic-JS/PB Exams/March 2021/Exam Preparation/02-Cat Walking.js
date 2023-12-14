function catWalking(input){
    let minutesWalking = Number(input[0]);
    let walkingCounts = Number(input[1]);
    let caloriesPerDay = Number(input[2]);


    let wastedCalories = walkingCounts * minutesWalking * 5;

    if(wastedCalories >= caloriesPerDay / 2){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${wastedCalories}.`);

    } else{
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${wastedCalories}.`);
    }

}






catWalking(["30",
"3",
"600"])
