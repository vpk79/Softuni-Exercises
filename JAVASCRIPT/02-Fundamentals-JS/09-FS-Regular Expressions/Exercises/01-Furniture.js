function solve(input){

    let pattern = />>(?<item>[A-Z][A-Za-z]+)<<(?<price>[\d.\d]+)!(?<quantity>[\d]+)\b/

    let furniture = [];
    let sum = 0;
    let product;
    for(let items of input){
        if(items == 'Purchase'){
            break;
        }
        if(pattern.test(items)){
            product = items.match(pattern);
        } else{
            continue;
        }
        let price = Number(product.groups.price * product.groups.quantity)
        furniture.push(product.groups.item);
        sum += price;
    }
    console.log("Bought furniture:");
    if(furniture.length > 0){
        console.log(furniture.join("\n"));
    }
    console.log(`Total money spend: ${sum.toFixed(2)}`);
}



// solve([
//     '>>Sofa<<312.23!3',
//     '>>TV<<300!5',
//     '>Invalid<<!5',
//     'Purchase'])

solve(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']
)


// solve(['>Invalid<<!4',
//     '>Invalid<<!2',
//     '>Invalid<<!5',
// 'Purchase'])