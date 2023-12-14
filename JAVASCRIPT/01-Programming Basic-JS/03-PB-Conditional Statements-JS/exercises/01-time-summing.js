function time(input){
    let sportMen1 = Number(input[0]);
    let sportMen2 = Number(input[1]);
    let sportMen3 = Number(input[2]);

    let totalTime = sportMen1 + sportMen2 + sportMen3;
    
    let minutes = Math.floor(totalTime / 60);
    
    let seconds = totalTime % 60;
   
    if (seconds < 10){
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

time(["50", "50", "49"])