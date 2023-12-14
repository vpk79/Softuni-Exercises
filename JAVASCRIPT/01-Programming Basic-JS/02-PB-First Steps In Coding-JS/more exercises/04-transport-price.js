function transport(input){
    let distance = Number(input[0]);
    let timeShift = input[1];

    let taxiDay = 0;
    let taxiNight = 0;
    let busPrice = 0;
    let trainPrice = 0;
  

    if (distance < 20 && timeShift === "day"){

        taxiDay = distance * 0.79 + 0.70;
        console.log(taxiDay.toFixed(2));
        
    } else if (distance < 20 && timeShift === "night"){

        taxiNight = distance * 0.90 + 0.70;
        console.log(taxiNight.toFixed(2));

     } else if (distance >= 20 && distance <= 99){
        busPrice = distance * 0.09;
        console.log(busPrice.toFixed(2));

    } else {
        trainPrice = distance * 0.06;
        console.log(trainPrice.toFixed(2));
    }
  

}



transport(["180", "night"])