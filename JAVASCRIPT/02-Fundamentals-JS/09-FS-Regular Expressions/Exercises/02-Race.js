function solve(input){

    let racers = {};
    let names = input.shift().split(", ")
    let racerName;
    let racerScore;

    for(let racer of names){
        racers[racer] = 0;
    }
    let namePattern = /[A-Za-z]+/g
    let scorePattern = /[\d]/g

    for(let line of input){
        if (line === 'end of race') break;

        if(namePattern.test(line) && scorePattern.test(line)){
            racerName = line.match(namePattern).join("");
            racerScore = line.match(scorePattern).reduce((a,x) => a + Number(x), 0);

            if(racers.hasOwnProperty(racerName)){
                racers[racerName] += racerScore;
            }
        }
    }

    let racersSorted = Object.entries(racers).sort((a,b) => b[1] - a[1]);

    console.log(`1st place: ${racersSorted[0][0]}`);
    console.log(`2nd place: ${racersSorted[1][0]}`);
    console.log(`3rd place: ${racersSorted[2][0]}`);
}


solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])

    