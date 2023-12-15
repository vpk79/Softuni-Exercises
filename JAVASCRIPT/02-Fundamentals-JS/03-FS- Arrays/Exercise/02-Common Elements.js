function commonElements(arr1, arr2){
    
    for (const element of arr1) {
        arr2.includes(element) ? console.log(element) : void(0);
    }

}

commonElements(
['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])