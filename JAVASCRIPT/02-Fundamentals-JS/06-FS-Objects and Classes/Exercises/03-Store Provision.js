function storeProvision(arr1, arr2) {
    let store = {};
    arr1 = arr1.map(x => isNaN(x) ? x : Number(x))
    arr2 = arr2.map(x => isNaN(x) ? x : Number(x))

    for (let i = 0; i < arr1.length; i += 2) {
        let product = arr1[i];
        let quantity = arr1[i + 1];

        store[product] = quantity;
    }

    for (let i = 0; i < arr2.length; i += 2) {
        let product = arr2[i];
        let quantity = arr2[i + 1];

        if (Object.keys(store).includes(product)) {
            store[product] += quantity;
        } else {
            store[product] = quantity;
        }

    }

    for (let key of Object.keys(store)) {
        console.log(`${key} -> ${store[key]}`);
    }
}



storeProvision([
 'Chips', '5', 'CocaCola', '9', 'Bananas',
 '14', 'Pasta', '4', 'Beer', '2'],
    [
 'Flour', '44', 'Oil', '12', 'Pasta', '7',
 'Tomatoes', '70', 'Bananas', '30'
    ]
)