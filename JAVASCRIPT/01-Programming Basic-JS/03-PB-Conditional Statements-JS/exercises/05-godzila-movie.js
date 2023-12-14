function movieMoney(input) {
    let budget = Number(input[0]);
    let mutesCount = Number(input[1]);
    let dressPrice = Number(input[2]);
    let decoration = budget * 0.1;

    let dressesSum = 0;

    if (mutesCount > 150) {
        dressesSum = (mutesCount * dressPrice) - ((mutesCount * dressPrice) * 0.1);
    } else {
        dressesSum = mutesCount * dressPrice;
    }

    if (dressesSum + decoration > budget) {
        let shortage = dressesSum + decoration - budget;
        
        console.log("Not enough money!");
        console.log(`Wingard needs ${shortage.toFixed(2)} leva more.`);
    } else {
        let remain = budget - (dressesSum + decoration);
        
        console.log("Action!");
        console.log(`Wingard starts filming with ${remain.toFixed(2)} leva left.`);

    }
}



movieMoney(["20000",

"120",

"55.5"])