function palindromeIntegers(arr){

    for(let num of arr){
        let buffer = [];
        buffer.push(num);
        let numReversed = buffer.toString().split("").reverse().join("");
        
        if(Number(numReversed) === buffer[0]){
            console.log(true);
            
        } else {
            console.log(false);
            
        }
    }
}



palindromeIntegers([123,323,421,121])
palindromeIntegers([32,2,232,1010])