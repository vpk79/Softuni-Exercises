function counterStrike(input){
    let energy = Number(input[0]);
    let counter = 0;
    let isEnd = false;

    for(let i = 1; i < input.length; i++){
        if(input[i] == "End of battle") {
            isEnd = true;
            break;}
        let distance = Number(input[i]);

        if(energy >= distance){
            energy -= distance;
            counter ++;
        } else{
            console.log(`Not enough energy! Game ends with ${counter} won battles and ${energy} energy`);
            break;
        }

        if(i % 3 == 0){
            energy += counter;
        }
    }

    if(isEnd){
        console.log(`Won battles: ${counter}. Energy left: ${energy}`);
    }


}



counterStrike(([
"100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"]))


counterStrike((["200",
"54",
"14",
"28",
"13",
"End of battle"])
)