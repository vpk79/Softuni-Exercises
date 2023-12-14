function breakTime(input){
    let spinOff = input[0];
    let episodeLength = Number(input[1]);
    let restTime = Number(input[2]);

    let launchTime = restTime * (1/8);
    let relaxTime = restTime * (1/4);

    let overallTime = restTime - launchTime - relaxTime;

    if (overallTime >= episodeLength){
        console.log(`You have enough time to watch ${spinOff} and left with ${Math.ceil(overallTime - episodeLength)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${spinOff}, you need ${Math.ceil(episodeLength - overallTime)} more minutes.`);
    }

}




breakTime(["Teen Wolf",

"48",

"60"])