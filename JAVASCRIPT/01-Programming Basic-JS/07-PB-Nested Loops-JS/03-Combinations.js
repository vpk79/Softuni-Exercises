function combinations(input){
    let x = Number(input[0]);
    let counter = 0;

    for(let i = 0; i <= x; i++){
        for(let j = 0; j <= x; j++){
            for(let k = 0; k <= x; k++){
                if(i+j+k === x){
                    counter++;

                }
            }
        }
    }

    console.log(counter);
}



combinations(["25"])