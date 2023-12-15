function solve(input){

    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<quantity>\d+)[^|$%.]*?\|[^|$%.]*?(?<price>\d+[.]*\d+)\$/
    let name, product, quantity, price, productPrice;
    let totalSum = 0;

    for(let line of input){
        if(line == 'end of shift') break;

        if(pattern.test(line)){
           let allInfo = line.match(pattern);
           name = allInfo.groups.name;
           product = allInfo.groups.product;
           quantity = Number(allInfo.groups.quantity);
           price = Number(allInfo.groups.price);
           productPrice = quantity * price;
           totalSum += productPrice;

            console.log(`${name}: ${product} - ${productPrice.toFixed(2)}`);
        }
    }
        console.log(`Total income: ${totalSum.toFixed(2)}`);
}




solve(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])

solve(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']
)