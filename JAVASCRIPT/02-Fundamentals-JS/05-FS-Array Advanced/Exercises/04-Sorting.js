function sorting(input){
    let arrSorted = input.sort((a, b) => a - b);
    let newArr = [];

    while(arrSorted.length > 0){
        let num = arrSorted.pop()
        newArr.push(num)
        if(arrSorted.length > 0){
            num = arrSorted.shift()
            newArr.push(num)
        }
    }

    console.log(newArr.join(" "));
}


// console.log(sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]));
// console.log(sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]));
sorting([34, 2, 33]);