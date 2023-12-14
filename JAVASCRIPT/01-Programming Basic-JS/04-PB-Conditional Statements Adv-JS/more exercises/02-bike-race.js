function bikeRace(input){
    let juniorBikers = Number(input[0]);
    let seniorBikers = Number(input[1]);
    let traceType = input[2];
    let juniorBikersTax = 0;
    let seniorBikersTax = 0;
    let bikersCount = juniorBikers + seniorBikers;
    let overallTax = 0;

    switch(traceType){
        case "trail":
            juniorBikersTax = juniorBikers * 5.50;
            seniorBikersTax = seniorBikers * 7;
            break;
        
        case "cross-country":
            juniorBikersTax = juniorBikers * 8;
            seniorBikersTax = seniorBikers * 9.50;
            

            if(bikersCount >= 50){
                overallTax = juniorBikersTax + seniorBikersTax;
                overallTax *= 0.75;
            }
            break;

        case "downhill":
            juniorBikersTax = juniorBikers * 12.25;
            seniorBikersTax = seniorBikers * 13.75;
            break;
        
        case "road":
            juniorBikersTax = juniorBikers * 20;
            seniorBikersTax = seniorBikers * 21.50;
            break;

        
        }
         
        if(overallTax == 0 ){
            overallTax = juniorBikersTax + seniorBikersTax;
            overallTax *= 0.95;
            console.log(`${overallTax.toFixed(2)}`);

        } else {
            overallTax *= 0.95;
            console.log(`${overallTax.toFixed(2)}`);
        }
}




bikeRace(["10", "10", "downhill"])