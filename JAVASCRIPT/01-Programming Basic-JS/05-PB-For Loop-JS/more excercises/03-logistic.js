function logistic(input){
    let cargoCount = Number(input[0]);
    let cargoPrice = 0;
    let busTonnage = 0;
    let truckTonnage = 0;
    let trainTonnage = 0;



    for(let i = 1; i < cargoCount +1; i++){
        let cargoTonnage = Number(input[i]);
        
        if (cargoTonnage <= 3){
            cargoPrice += cargoTonnage * 200;
            busTonnage += cargoTonnage;
        } else if(cargoTonnage <= 11){
            cargoPrice += cargoTonnage * 175;
            truckTonnage += cargoTonnage;
        } else {
            cargoPrice += cargoTonnage * 120;
            trainTonnage += cargoTonnage;
        }
    }

    let tonnageSum = busTonnage + truckTonnage + trainTonnage;
    let avgTonnagePrice = cargoPrice / tonnageSum;
    let busTonnagePercent = busTonnage / tonnageSum * 100;
    let truckTonnagePercent = truckTonnage / tonnageSum * 100;
    let trainTonnagePercent = trainTonnage / tonnageSum * 100;

    console.log(avgTonnagePrice.toFixed(2));
    console.log(busTonnagePercent.toFixed(2) + "%");
    console.log(truckTonnagePercent.toFixed(2) + "%");
    console.log(trainTonnagePercent.toFixed(2) + "%");

}






logistic(["4","1","5","16","3"])