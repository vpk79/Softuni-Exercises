function equalPairs(input){
    let pairsCount = Number(input[0]) * 2;
 
    let difference = 0;
    let difference2 = 0;
  
    let pairs = 0;
    let pairs2 = 0;
    let counter = 0;


    for(let i = 1; i < pairsCount + 1; i += 2){
        if(i < pairsCount){
        pairs = Number(input[i]) + Number(input[i+1]);
        }
        if(pairs != pairs2){
                if(counter > 0){
            difference = Math.abs(pairs - pairs2);
                }
            pairs2 = pairs;
            
                if((difference > difference2) && counter > 0){
                    difference2 = difference;
                } else {counter++}
        } else{
            pairs2 = pairs;
            
        }

    }
    if(difference === 0){
        console.log(`Yes, value=${pairs}`);
    } else {
    console.log(`No, maxdiff=${difference2}`);
    }

}

// equalPairs(["2","1","2","2","2"])
// equalPairs(["1","5","5"])
// equalPairs(["3","1","2","0","3","4","-1"])
equalPairs(["2","-1","0","0","-1"])