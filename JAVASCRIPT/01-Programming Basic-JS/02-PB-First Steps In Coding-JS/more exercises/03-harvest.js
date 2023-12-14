function harvest(input){
    let grapeField = Number(input[0]);
    let grapePerMeter = Number(input[1]);
    let neededWineLitters = Number(input[2]);
    let workers = Number(input[3]);

    let quantityWine = ((grapeField * grapePerMeter) * 0.4) / 2.5;

    if(quantityWine < neededWineLitters){
        let difference = Math.floor(neededWineLitters - quantityWine);
        console.log(`It will be a tough winter! More ${difference} liters wine needed.`);
    } else{ 
        let difference = Math.ceil(quantityWine - neededWineLitters);
        let winePerWorker = Math.ceil (difference / workers);
        console.log(`Good harvest this year! Total wine: ${Math.floor(quantityWine)} liters.`);
        console.log(`${difference} liters left -> ${winePerWorker} liters per person.`);
    }


}



harvest(["650", "2", "175", "3"]);