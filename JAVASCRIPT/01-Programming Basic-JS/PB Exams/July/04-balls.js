function balls(input){
    let ballsCount = Number(input[0]);
    let score = 0;
    let redCount = 0;
    let orangeCount = 0;
    let yellowCount = 0;
    let whiteCount = 0;
    let blackCount = 0;
    let otherCount = 0;

    for(let i = 1; i < ballsCount + 1; i++){

        switch(input[i]){
            case "red": score += 5; redCount++; break;
            case "orange": score += 10; orangeCount++; break;
            case "yellow": score += 15; yellowCount++; break;
            case "white": score += 20; whiteCount++; break;
            case "black": score = Math.floor(score / 2); blackCount++; break;
            default: otherCount++; break;
        }
    }

    console.log(`Total points: ${score}`);
    console.log(`Red balls: ${redCount}`);
    console.log(`Orange balls: ${orangeCount}`);
    console.log(`Yellow balls: ${yellowCount}`);
    console.log(`White balls: ${whiteCount}`);
    console.log(`Other colors picked: ${otherCount}`);
    console.log(`Divides from black balls: ${blackCount}`);
    
}



balls(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"])

