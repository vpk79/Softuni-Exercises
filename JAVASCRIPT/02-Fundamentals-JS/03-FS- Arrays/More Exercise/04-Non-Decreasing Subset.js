function nonDecreasingSubset(arr){
    
    let num = Number.MIN_SAFE_INTEGER;

    function isBigger(value){
        if(value >= num){
            num = value;
            return true;
        }
        return false;
    }

    let filtered = arr.filter(isBigger)

    console.log(filtered.join(" "));
}


nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])
nonDecreasingSubset([ 1, 2, 3, 4])
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1])