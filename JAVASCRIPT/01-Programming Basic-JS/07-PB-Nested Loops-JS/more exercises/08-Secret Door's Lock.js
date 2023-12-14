function secretLock(input){
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);


    
    for(let i = 1; i <= num1; i++){
        if(i % 2 !==0){
            continue;
        } 

        for(let j = 2; j <= num2; j++){

            if(j == 2 || j == 3 || j == 5 || j == 7){
                
                    for(let l = 1; l <= num3; l++){
                        if(l % 2 !== 0){
                            continue;
                        }
                        console.log(`${i} ${j} ${l}`);
                        
                    

                }
            }

            
        }

    }
}


secretLock(["8", "2", "8"])