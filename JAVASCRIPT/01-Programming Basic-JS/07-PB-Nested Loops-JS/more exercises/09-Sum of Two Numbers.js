function sumOfTwoNumbers(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);
    let counter = 0;
    let flag = false;

    for(let i = start; i <= end; i++){
        
        for(let j = start; j <= end; j++){
            counter ++;
            if(i + j === magicNum){
                flag = true;
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNum})`);
                break;
            }
        }

        if (flag){
            break;
        }
    }

    if (flag === false){
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }

}






sumOfTwoNumbers(["1", "10", "5"])
sumOfTwoNumbers(["88","888","1000"])