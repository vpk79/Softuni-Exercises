function happyCat(input){
    let days = Number(input[0]);
    let hours = Number(input[1]);
    
    let sum = 0;

    for(let i = 1; i <= days; i++){
        let tax = 0;

        for(let j = 1; j <= hours; j++){
            if(i % 2 == 0 && j % 2 !== 0){
                tax += 2.50;
            } else if(i % 2 !== 0 && j % 2 == 0){
                tax += 1.25;
            } else {
                tax += 1;
            }
        }
        sum += tax;
        console.log(`Day: ${i} - ${tax.toFixed(2)} leva`);        
    } 

    console.log(`Total: ${sum.toFixed(2)} leva`);

}




happyCat(["5","2"])