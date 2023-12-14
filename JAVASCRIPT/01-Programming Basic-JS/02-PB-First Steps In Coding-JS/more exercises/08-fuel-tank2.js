function fuelExpenses(input){
    let fuelType = input[0];
    let fuelQuantity = Number(input[1]);
    let haveClubCard = input[2];

    let gasolinePrice = 2.22;
    let dieselPrice = 2.33;
    let gasPrice = 0.93;

    let finalPrice = 0;

    if (fuelType === "Gas" || fuelType === "Gasoline" || fuelType === "Diesel"){
        if (fuelType === "Gas"){
            if (haveClubCard === "Yes"){
                gasPrice -= 0.08
            }
            
            if (fuelQuantity >= 20 && fuelQuantity <= 25){
                finalPrice = fuelQuantity * gasPrice;
                finalPrice = finalPrice -(finalPrice * 0.08);
            } else if (fuelQuantity > 25){
                finalPrice = fuelQuantity * gasPrice;
                finalPrice = finalPrice -(finalPrice * 0.10);

            } else {
                finalPrice = fuelQuantity * gasPrice;

            }
        console.log(finalPrice.toFixed(2) + " lv.");    

        }

        if (fuelType === "Gasoline"){
            if (haveClubCard === "Yes"){
                gasolinePrice -= 0.18
            }

            if (fuelQuantity >= 20 && fuelQuantity <= 25){
                finalPrice = fuelQuantity * gasolinePrice;
                finalPrice = finalPrice -(finalPrice * 0.08);
            } else if (fuelQuantity > 25){
                finalPrice = fuelQuantity * gasolinePrice;
                finalPrice = finalPrice -(finalPrice * 0.10);

            } else {
                finalPrice = fuelQuantity * gasolinePrice;
            }
        console.log(finalPrice.toFixed(2) + " lv.");     
        }

        if (fuelType === "Diesel"){
            if (haveClubCard === "Yes"){
                dieselPrice -= 0.12
            }

            if (fuelQuantity >= 20 && fuelQuantity <= 25){
                finalPrice = fuelQuantity * dieselPrice;
                finalPrice = finalPrice -(finalPrice * 0.08);
            } else if (fuelQuantity > 25){
                finalPrice = fuelQuantity * dieselPrice;
                finalPrice = finalPrice -(finalPrice * 0.10);

            } else {
                finalPrice = fuelQuantity * dieselPrice;
            }
        console.log(finalPrice.toFixed(2) + " lv.");     
        }

    }

}



fuelExpenses(["Diesel", "19", "No"])