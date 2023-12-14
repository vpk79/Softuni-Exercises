function swimRecord(input){
    let worldRecord = Number(input[0]);
    let distance = Number(input[1]);
    let timePerMeter = Number(input[2]) ;

    let delaySeconds = Math.floor(distance / 15) * 12.5;
    let ivanSpeed = distance * timePerMeter + delaySeconds;
    

    if(ivanSpeed < worldRecord){
        console.log(`Yes, he succeeded! The new world record is ${ivanSpeed.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(ivanSpeed - worldRecord).toFixed(2)} seconds slower.`);
    }
    
}


swimRecord(["10464",

"1500",

"20"])