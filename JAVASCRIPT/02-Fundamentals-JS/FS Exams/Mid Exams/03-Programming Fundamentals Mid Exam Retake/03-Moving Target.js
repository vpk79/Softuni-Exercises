function movingTarget(input){
    let array = input.slice();
    let targets = array.shift().split(" ").map(x => Number(x));
    

    for(const el of array){
        if(el === "End") break;
        let arrayOfEl = el.split(" ");
        let [command, index, value] = arrayOfEl;
        index = Number(index);
        value = Number(value);

        switch(command){
            case 'Shoot':
                if(index >= 0 && index < targets.length){
                    targets[index] -= value;
                    if(targets[index] <= 0){
                        targets.splice(index, 1);
                    }
                }
                break;

            case 'Add': 
                if(index >= 0 && index < targets.length){
                    targets.splice(index, 0, value);
                } else{
                    console.log("Invalid placement!");
                }
                break;

            case 'Strike':
                if(index - value >= 0 && index + value < targets.length){
                    targets.splice(index - value, value * 2 + 1)

                } else {
                    
                    console.log("Strike missed!");
                   
                }

                break;
        }   

    }

    console.log(targets.join("|"));
}



movingTarget(([
"52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])
)

movingTarget((["1 2 3 4 5",
"Strike 0 1",
"End"])
)