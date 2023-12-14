function easterTrips(input){
    let destination = input[0];
    let datePeriod = input[1];
    let nightsCount = input[2];
    let nightPrice = 0;

    switch(destination){

        case "France":
            if(datePeriod === "21-23"){
                nightPrice = 30;
            } else if(datePeriod === "24-27"){
                nightPrice = 35;
            } else {
                nightPrice = 40;
            }
            break;
        
        case "Italy":
            if(datePeriod === "21-23"){
                nightPrice = 28;
            } else if(datePeriod === "24-27"){
                nightPrice = 32;
            } else {
                nightPrice = 39;
            }
            break;

            case "Germany":
                if(datePeriod === "21-23"){
                    nightPrice = 32;
                } else if(datePeriod === "24-27"){
                    nightPrice = 37;
                } else {
                    nightPrice = 43;
                }
                break;

    }

    let expenses = nightsCount * nightPrice;

    console.log(`Easter trip to ${destination} : ${expenses.toFixed(2)} leva.`);
}






easterTrips(["Italy",
"21-23",
"7"])

