function searchForANumber(arr1, arr2){
    let[takeEl, deleteEl, searchEl] = arr2;

    let arr1Copy = arr1.slice(0, takeEl);
    arr1Copy.splice(0, deleteEl);
    arr1Copy = arr1Copy.filter(x => x == searchEl);

    let count = arr1Copy.length;

    return(`Number ${searchEl} occurs ${count} times.`)

}



console.log(searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]))
console.log(searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]));