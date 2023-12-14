function vacation(input){
    let budget = Number(input[0]);
    let season = input[1];
    let placeType = "";
    let location = "";


    switch(season){

        case "Summer":

            location = "Alaska";

            if (budget <= 1000){
                placeType = "Camp";
                budget *= 0.65;
            } else if(budget <= 3000){
                placeType = "Hut";
                budget *= 0.80;
            } else {
                placeType = "Hotel";
                budget *= 0.90;
            }
            break;

        case "Winter":
            location = "Morocco";

            if (budget <= 1000){
                placeType = "Camp";
                budget *= 0.45;
            } else if(budget <= 3000){
                placeType = "Hut";
                budget *= 0.60;
            } else {
                placeType = "Hotel";
                budget *= 0.90;
            }




        break;
    }

    console.log(`${location} - ${placeType} - ${budget.toFixed(2)}`);
    
}



vacation(["5000", "Winter"])