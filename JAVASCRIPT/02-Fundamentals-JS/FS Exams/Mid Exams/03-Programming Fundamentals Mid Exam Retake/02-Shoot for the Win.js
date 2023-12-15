function shootForTheWin(input){
    let array = input.slice()
    let targets = array.shift().split(" ").map(x => Number(x))
    
    let targetValue = 0;

    for(const el of array){
        if(el === "End") break;

        let index = Number(el);
        if(targets[index] == undefined || targets[index] == -1) continue;

        
        targetValue = targets[index];
        targets[index] = -1;
        

        for(let i = 0; i < targets.length; i++){
            if(targets[i] > -1 && targets[i] > targetValue){
                targets[i] -= targetValue;
            } else if(targets[i] > -1 && targets[i] <= targetValue){
                targets[i] += targetValue;
            }

        }

        
    }

    let shotTargets = targets.filter(x => x == -1).length;

    console.log(`Shot targets: ${shotTargets} -> ${targets.join(" ")}`);
}



shootForTheWin(([
"24 50 36 70",
"0",
"4",
"3",
"1",
"End"]))

shootForTheWin((["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"]))