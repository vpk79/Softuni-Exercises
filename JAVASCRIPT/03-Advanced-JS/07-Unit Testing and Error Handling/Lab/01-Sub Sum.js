function solve(arr, startIdx, endIdx){
    if(!Array.isArray(arr)){
        return NaN;
    }
    if(startIdx < 0) startIdx = 0;
    if(endIdx > arr.length - 1) endIdx = arr.length - 1;

    let sum = 0;
    
    for(let i = startIdx; i <= endIdx; i++){
        sum += Number(arr[i]);
    }

    return sum;
}





// console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));
// console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1))
console.log(solve([10, 'twenty', 30, 40], 0, 2));