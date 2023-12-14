function passGenerator(input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    let combinations = Number(input[2]);
    let password = "";
    let flag = false;
    
    let counter = 0;

    for(let i = 35; i <= 55; i++){
        for(let j = 64; j <= 96; j++){
            for(let k = 1; k <= a; k++){

                for(let l = 1; l <= b; l++){

                    counter++;
                    if(counter > combinations){
                        flag = true;
                        break;

                    }
                    let charA = String.fromCharCode(i);
                    let charB = String.fromCharCode(j);
                    password += (`${charA}${charB}${k}${l}${charB}${charA}|`)

                    if(k == a && l == b){
                        flag = true;
                        break;
                    }

                    i++;
                    if(i > 55){
                        i = 35;
                    }

                    j++;
                    if(j>96){
                        j = 64;
                    }

                    
                }

                if(flag){
                    break;
                }
               
            }
            if(flag){
                break;
            }
          
        }
        if(flag){
            break;
        }




      

    }
    console.log(password);
   
}


passGenerator(["2","3","10"])
passGenerator(["20","50","10"])