function vacation(input){
    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let nightPrice = Number(input[2]);
    let percentExpenses = Number(input[3]) / 100;

    if (nights > 7 && nights > 0){
        nightPrice = nightPrice - (nightPrice * (5 / 100));
                
    }

    let nightExpenses = nights * nightPrice;
    let addExpenses = budget * percentExpenses;

    let maxExpenses = nightExpenses + addExpenses;

    if(maxExpenses > budget){
        let result = maxExpenses - budget;
        result = result.toFixed(2);
        console.log(`${result} leva needed.`);
    }
        else{
            let result = budget - maxExpenses;
            result = result.toFixed(2);
            console.log(`Ivanovi will be left with ${result} leva after vacation.`);
        }

 
}



vacation(["800.50",
"8",
"100",
"2"])

