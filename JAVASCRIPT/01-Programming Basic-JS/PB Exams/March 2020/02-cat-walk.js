function catWalk(input){
    let walkMinutes = Number(input[0]);
    let walksCount = Number(input[1]);
    let caloriesTaken = Number(input[2]);

    let caloriesSpent = walkMinutes * walksCount * 5;


    if (caloriesSpent >= (caloriesTaken * 0.50)){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesSpent}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesSpent}.`);
    }
}


catWalk(["40",
"2",
"300"])


