function computerStore(input){

    let totalPrice = 0;
    let el = ''

    for (el of input) {
        if(el === 'special' || el === 'regular') break;

        let price = Number(el);

        if(price < 0){
            console.log("Invalid price!");
            continue;
        }

        totalPrice += price;
    }

    if(totalPrice === 0){
        console.log("Invalid order!");
        return;
    }

    priceNoTaxes = totalPrice;
    taxes = totalPrice * 0.20;
    totalPrice *= 1.20;

    if(el === 'special') totalPrice *= 0.90;

    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${priceNoTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${totalPrice.toFixed(2)}$`);
}





// computerStore([
//     '1050',
//     '200',
//     '450',
//     '2',
//     '18.50',
//     '16.86',
//     'special'
//     ])
    
// computerStore(['regular']

computerStore(([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ])
    )