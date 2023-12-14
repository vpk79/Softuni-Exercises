function sleepyCat(input){
    let restDays = Number(input[0]);
    let workDays = 365 - restDays;

    let playtimeWhenWork = workDays * 63;
    let playtimeWhenRest = restDays * 127;

    let overallPlaytime = playtimeWhenRest + playtimeWhenWork;

    if(overallPlaytime > 30000){
        console.log("Tom will run away");
        let timeLeft = overallPlaytime - 30000;
        let hoursLeft = Math.floor(timeLeft / 60);
        let minutesLeft = timeLeft % 60;
        console.log(`${hoursLeft} hours and ${minutesLeft} minutes more for play`);
    } else {
        console.log("Tom sleeps well");
        let timeLeft = 30000 - overallPlaytime;
        let hoursLeft = Math.floor(timeLeft / 60);
        let minutesLeft = timeLeft % 60;
        console.log(`${hoursLeft} hours and ${minutesLeft} minutes less for play`);

    }
}




sleepyCat(["150"]);