function lastKnumbersSequence(sequence, lastSum){

    let result = [1];
    let num = 0;
    let sum = 0;
    
    for(let i = 0; i < sequence -1; i++){
        let j = 0;
        let index = i;
        sum = 0;

        while(j < lastSum){
            num = result[index];

            if(num === undefined){
                num = 0;
            }

            sum += num;
            index--;
            j++;
        }
        result.push(sum);
    }
    return (result.join(" "))
}



console.log(lastKnumbersSequence(6, 3));
console.log(lastKnumbersSequence(8, 2));
