function overallSum(input){
    let peterBudget = Number(input[0]);
    let videocardCount = Number(input[1]);
    let cpuCount = Number(input[2]);
    let videocardsPrice = videocardCount * 250;
    let cpuPrice = cpuCount * (videocardsPrice * 0.35);
    let ramPrice = Number(input[3]) * (videocardsPrice * 0.1);

    let expenses = videocardsPrice + cpuPrice + ramPrice;

    if ( videocardCount > cpuCount){
        expenses = expenses - (expenses * 0.15);
    }

    if (peterBudget >= expenses){
        console.log(`You have ${(peterBudget - expenses).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(expenses - peterBudget).toFixed(2)} leva more!`);
    }
}




overallSum(["900",

"2",

"1",

"3"])