function journey(input){
    let budget = Number(input[0]);
    let season = input[1];

    let finalBudget = budget;
    let destination ="";
    let restCamp = "Hotel"

    if(budget <= 100){
        destination = "Bulgaria";
        if(season == "summer"){
           finalBudget *= 0.70;
            restCamp = "Camp"

        } else{
            finalBudget *= 0.30;
        }
    } else if(budget <= 1000){
        destination = "Balkans";
        if(season == "summer"){
            finalBudget *= 0.60;
            restCamp = "Camp"
        } else {
            finalBudget *= 0.20;
        }
 
    } else {
        destination = "Europe";
        finalBudget *= 0.10;
    }
    let spendedSum = budget - finalBudget;
    console.log(`Somewhere in ${destination}`);
    console.log(`${restCamp} - ${spendedSum.toFixed(2)}`);
}



journey(["1500", "summer"])