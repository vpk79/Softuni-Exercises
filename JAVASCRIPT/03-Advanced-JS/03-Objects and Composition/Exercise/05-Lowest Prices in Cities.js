function solve(input){

    let market = {};

    for(let token of input){
        let[city, product, price] = token.split(" | ");
        price = Number(price);
        if(!market.hasOwnProperty(product)){
            market[product] = { price, city }
        } else if(market[product].price > price){
            market[product].price = price;
            market[product].city = city;
        }
        
    }  

    for(let product in market){

        console.log(`${product} -> ${market[product].price} (${market[product].city})`);
    }
}



solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)