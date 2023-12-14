function specialNumbers(input){
    let number = Number(input[0]);
    let exit = ""

    for(let i = 1; i < 9; i++){
        if(number % i == 0) {
            for(let j = 1; j < 9; j++){
                if(number % j == 0){
                    for(let k = 1; k < 9; k++){
                        if(number % k == 0){
                            for(let n = 1; n < 9; n++){
                                if(number % n == 0){
                                    exit += `${i}${j}${k}${n} `
                                    
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    console.log(exit);

}






specialNumbers(["11"])