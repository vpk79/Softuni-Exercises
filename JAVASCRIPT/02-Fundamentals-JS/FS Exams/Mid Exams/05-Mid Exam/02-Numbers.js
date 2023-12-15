function solve(input){

let mainArr = input.shift().split(" ").map(Number)

for(let line of input){
    if(line == 'Finish') break;
    let [command, number, number2] = line.split(" ");
    number = Number(number);
    number2 = Number(number2);
    

    switch(command){
        
        case 'Add': mainArr.push(number); break;
        case 'Remove': 
            if(mainArr.includes(number)){
                mainArr.splice(mainArr.indexOf(number), 1);
            };
            break;
        case 'Replace': 
            if(mainArr.includes(number)){
                let index = mainArr.indexOf(number);
                mainArr[index] = number2;
            };
            break;
        case 'Collapse': 
            mainArr = mainArr.filter(x => x >= number);
            break;
    }

}

    console.log(mainArr.join(" "));

}




solve(["1 4 5 19",
    "Add 1",
    "Remove 4",
    "Finish"])

solve(["1 20 -1 10",
    "Collapse 8",
    "Finish"])


solve(["5 9 70 -56 9 9",
    "Replace 9 10",
    "Remove 9",
    "Finish"])

// solve(["5 9 70 -56 9 9",
    
//     "Finish"])


// solve(["14 1 5 19",
//     "Add 1",
//     "Remove 4",
//     "Finish"])