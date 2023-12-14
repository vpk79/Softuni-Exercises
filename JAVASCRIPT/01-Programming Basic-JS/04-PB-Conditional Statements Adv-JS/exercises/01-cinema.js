function cinema(input){
    let typeOfProjection = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let ticketsCount = rows * columns;
    let finalPrice = 0;
    switch(typeOfProjection){
        case "Premiere": finalPrice = ticketsCount * 12.00; break;
        case "Normal": finalPrice = ticketsCount * 7.50; break;
        case "Discount": finalPrice = ticketsCount * 5.00; break;
    }
    console.log(finalPrice.toFixed(2) + " leva");
}


cinema(["Discount", "12", "30"])