function magicNumber(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let isFound = false;
    let counter = 0;

    for(i = start; i <= end; i++){
        for(j = start; j <= end; j++){
            counter++;
            if(i+j === magicNumber){
                
                isFound = true;
                break;
            }
        }
        if(isFound){
            break;
        }
        
    }
    if(isFound){
        console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
    } else {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
    

}




magicNumber(["88", 
"888", 
"2000"])

