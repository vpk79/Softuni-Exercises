function equalArrays(arr1, arr2) {
    let sum = 0;
    let equal = false;
    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] === arr2[i]) {
            sum += Number(arr1[i]);
            equal = true;
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            equal = false;
            break;
        }
    }

    if(equal){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}




equalArrays(['1','2','3','4','5'],
['1','2','4','4','5']
);