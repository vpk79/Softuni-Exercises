function flowerShop(input){
    let chrysanthemums = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let isHoliday = input[4];
    let discount = 0;
    let discount2 = 0;
    let flowersCount = roses + tulips + chrysanthemums;

    let chrysanthemumsPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;

    switch(season){

        case "Spring":
            chrysanthemumsPrice = 2.00;
            rosesPrice = 4.10;
            tulipsPrice = 2.50;
            if(tulips > 7){
                discount = 0.95;
            }
            break;
        
        case "Summer":
            chrysanthemumsPrice = 2.00;
            rosesPrice = 4.10;
            tulipsPrice = 2.50;
            break;
        
        case "Autumn":
            chrysanthemumsPrice = 3.75;
            rosesPrice = 4.50;
            tulipsPrice = 4.15;
            break;

        case "Winter":
            chrysanthemumsPrice = 3.75;
            rosesPrice = 4.50;
            tulipsPrice = 4.15;

            if(roses >= 10){
                discount = 0.90;
            }
            break;
            
    }

    if(isHoliday === "Y"){
        chrysanthemumsPrice *= 1.15;
        rosesPrice *= 1.15;
        tulipsPrice *= 1.15;
    }    

    let bouqetPrice = 0;

    if (discount != 0) {
        bouqetPrice = (chrysanthemums * chrysanthemumsPrice + roses * rosesPrice + tulips * tulipsPrice) * discount;
    } else {
        bouqetPrice = (chrysanthemums * chrysanthemumsPrice + roses * rosesPrice + tulips * tulipsPrice)
    }

    if(flowersCount > 20){
        discount2 = 0.80;
        bouqetPrice = bouqetPrice * discount2 + 2;
    } else bouqetPrice = bouqetPrice + 2;

    

    console.log(bouqetPrice.toFixed(2));
    

}




// flowerShop(["3", "10", "9", "Winter", "N"])
flowerShop (["2", "4", "8", "Spring", "Y"])