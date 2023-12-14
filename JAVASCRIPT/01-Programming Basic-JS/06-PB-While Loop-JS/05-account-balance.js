function accountBalance(input){

    let index = 0;
    let text = input[index];
    
    let sum = 0;

    while(text !== "NoMoreMoney"){
        
        let num = Number(input[index]);

        if(num < 0){
            console.log("Invalid operation!");
            break;            
        }
        
        console.log(`Increase: ${num.toFixed(2)}`);
        sum += num;

        index++;
        text = input[index];
        

    }

    console.log(`Total: ${sum.toFixed(2)}`);
}

accountBalance(["120",
"45.55",
"-150"])

