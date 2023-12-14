function pinCodes(input){
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);
    let result = ""

    for(let i = 1; i <= num1; i++){
        if(i % 2 == 0){
            for(let j = 2; j <= num2; j++){
                let flag = 0;
                for(l = 2; l < j; l++){
                    
                    if(j % l == 0){
                        flag = 1;
                        break;
                    }    
                }    
                for(let k = 1; k <= num3; k++){
                    if(k % 2 == 0){
                        result = `${i} ${j} ${k}`
                        if(flag == 0){
                        console.log(result);
                        }
                    }
                }
            }
        }
    }
}


pinCodes(["8","2","8"])