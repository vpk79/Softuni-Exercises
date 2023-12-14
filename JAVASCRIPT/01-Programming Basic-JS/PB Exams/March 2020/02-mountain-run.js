function mountainRun(input){
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timePerMeter = Number(input[2]);


    let delayTime = Math.floor(distance / 50 ) * 30;
    let climbingTime = distance * timePerMeter + delayTime;

    if(climbingTime < record){
        console.log(`Yes! The new record is ${climbingTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${(climbingTime - record).toFixed(2)} seconds slower.`);
    }
}



mountainRun(["1377",
"389",
"3"])


