function listOfProducts(input){
    let sorted = input.sort();
    let buffer = '';

    for(let i = 0; i < sorted.length; i++){
        buffer += (`${i+1}.${sorted[i]}\n`)
    }

    return buffer;
}


console.log(listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']));