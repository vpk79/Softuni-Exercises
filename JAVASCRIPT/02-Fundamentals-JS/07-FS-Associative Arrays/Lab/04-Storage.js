function solve(input){
    let storage = new Map();

    for(let line of input){
        let[product, counts] = line.split(" ");
        counts = Number(counts);

        if(storage.has(product)){
            storage.set(product, (storage.get(product) + counts))
        } else{
            storage.set(product, counts);
        }
    }

    for(let [product, count] of storage){
        console.log(`${product} -> ${count}`);
    }
}



solve([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])