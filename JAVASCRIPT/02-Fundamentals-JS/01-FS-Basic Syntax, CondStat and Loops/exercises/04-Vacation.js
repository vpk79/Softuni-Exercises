function vacation(count, groupType, day){

    let price = 0;

    switch(day){
        case "Friday":
            if(groupType === "Students"){
                price = 8.45;
            } else if(groupType === "Business"){
                price = 10.90;
            } else {
                price = 15;
            }
            break;

        case "Saturday":
            if(groupType === "Students"){
                price = 9.80;
            } else if(groupType === "Business"){
                price = 15.60;
            } else {
                price = 20;
            }
            break;

        case "Sunday":
            if(groupType === "Students"){
                price = 10.46;
            } else if(groupType === "Business"){
                price = 16;
            } else {
                price = 22.50;
            }
            break;
    }

    if(groupType === "Students" && count >= 30) {
        price *= 0.85
    }

    if(groupType === "Business" && count >= 100){
        count -= 10;
    }

    if(groupType === "Regular" && count >= 10 && count <= 20){
        price *= 0.95
    }

    price = price * count;

    console.log(`Total price: ${price.toFixed(2)}`);


}





vacation(
    40,
"Regular",
"Saturday"
    )