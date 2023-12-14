function mariqGift(input){
    let magnolia = Number(input[0]) * 3.25;
    let hyacinth = Number(input[1]) * 4;
    let roses = Number(input[2]) * 3.50;
    let cactuses = Number(input[3]) * 8;
    let giftPrice = Number(input[4]);

    let orderSum = magnolia + hyacinth + roses + cactuses;
    let finalOrderSum = orderSum - (orderSum * 0.05);

    if (giftPrice <= finalOrderSum){
        console.log(`She is left with ${Math.floor(finalOrderSum - giftPrice)} leva.`);

    } else {
        console.log(`She will have to borrow ${Math.ceil(giftPrice - finalOrderSum)} leva.`);
    }




}



mariqGift(["2", "3", "5", "1", "50"])