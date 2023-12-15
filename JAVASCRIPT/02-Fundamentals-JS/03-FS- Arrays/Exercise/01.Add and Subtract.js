function addAndSubtract(arr){
    let sumArrOriginal = 0;
    let sumArrModified = 0;
   
    for(let i = 0; i < arr.length; i++){
        sumArrOriginal += arr[i];
        if(arr[i] % 2 == 0){
            arr[i] += i;
        } else {
            arr[i] -= i;
        }
        sumArrModified += arr[i];
    }

    console.log(arr);
    console.log(sumArrOriginal);
    console.log(sumArrModified);
}


addAndSubtract([5, 15, 23, 56, 35])
addAndSubtract([-5, 11, 3, 0, 2])