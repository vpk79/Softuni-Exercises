function safeCrack(input){
    let controlValue = Number(input[0]);
    let counter = 0;
    let password = ""
    let flag = false;
    let buffer = "";

    for(let i = 1; i <= 9; i++){
        for(let j = 1; j <= 9; j++){
            if(i < j){
                for(let k = 1; k <= 9; k++){
                    for(let l = 1; l <= 9; l++){
                        if(k > l){
                            if((i * j + k * l) === controlValue){
                                counter++;
                                buffer += (`${i}${j}${k}${l} `);
                                if(counter === 4){
                                    flag = true;
                                    password += (`${i}${j}${k}${l}`)
                                }
                            }
                        }

                    }
                }
            }    
        }
       

    }
    console.log(buffer);
    if(flag){
    console.log(`Password: ${password}`);
    } else (console.log("No!"));
}







safeCrack(["55"])