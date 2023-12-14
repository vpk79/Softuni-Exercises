function hotelRoom(input){
    let month = input[0];
    let nights = Number(input[1]);
    let studioPrice = 0;
    let apartmentPrice = 0;
    let nightsStudio = 0;
    let nightsApartment = 0;

    switch(month){
        case "May":
        case "October":
            studioPrice = 50;
            apartmentPrice = 65;
            break;

        case "June":
        case "September":
            studioPrice = 75.20;
            apartmentPrice = 68.70;
            break;

        case "July":
        case "August":
            studioPrice = 76;
            apartmentPrice = 77;
            break;

    }

    nightsStudio = nights * studioPrice;
    nightsApartment = nights * apartmentPrice;

    if(month == "May" || month == "October"){
        if (nights > 7 && nights <= 14){
            nightsStudio *= 0.95;
        } else if(nights > 14) {
            nightsStudio *= 0.70;
        }
    } else if ((month == "June" || month == "September") && nights > 14){
        
            nightsStudio *= 0.80;
        
    }

    if(nights > 14){
        nightsApartment *= 0.90;
    }

    console.log(`Apartment: ${nightsApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${nightsStudio.toFixed(2)} lv.`);
}




hotelRoom(["May", "6"])
console.log(`--------------------`);
hotelRoom(["June", "14"]);
console.log(`--------------------`);
hotelRoom(["August", "20"]);