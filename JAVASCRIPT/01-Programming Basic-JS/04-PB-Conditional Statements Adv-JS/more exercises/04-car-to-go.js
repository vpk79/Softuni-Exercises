function rentCar(input){
    let budget = Number(input[0]);
    let season = input[1];
    let carClass = "";
    let carType = "";

    switch(season){

        case "Summer":
            
            if(budget <= 100){
                carClass = "Economy class";
                carType = "Cabrio";
                budget *= 0.35;
            } else if (budget <= 500){
                carClass = "Compact class";
                carType = "Cabrio";
                budget *= 0.45;
                             
            } else {
                carClass = "Luxury class";
                carType = "Jeep";
                budget *= 0.90;
            }
            break;

        case "Winter":
            carType = "Jeep";
            if(budget <= 100){
                carClass = "Economy class";
                budget *= 0.65;
            } else if (budget <= 500){
                carClass = "Compact class";
                budget *= 0.80;
            } else {
                carClass = "Luxury class";
                budget *= 0.90;
            }
            break;
    }

    console.log(carClass);
    console.log(`${carType} - ${budget.toFixed(2)}`);
}





rentCar(["99.99", "Summer"]);