function equalPairs(input){
    let pairsCount = Number(input[0]) * 2;
    let buffer = [];
    let difference = 0;
    let buffer2 = [];


    for(let i = 1; i < pairsCount + 1; i += 2){
        if( i < pairsCount){
        let pairs = Number(input[i]) + Number(input[i+1]);
        buffer.push(pairs);
            
        }       

    }

    for(let i = 0; i < buffer.length -1; i++){
        let num1 = buffer[i];
        let num2 = buffer[i+1];
        

        if(num1 != num2){
            difference = Math.abs(num1 - num2);
            buffer2.push(difference);

        }
    }
    
    buffer2.push(0);
    let highestNumber = Math.max.apply(null, buffer2);

    if(highestNumber == "0"){
        console.log(`Yes, value=${buffer[0]}`);
    } else{
        console.log(`No, maxdiff=${highestNumber}`);
    } 
    
    

}



equalPairs(["2","1","2","2","2"])