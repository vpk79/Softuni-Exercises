function sumAndProduct(input){
    let n = input[0];
    let nAsNumber = Number(n);
    let lastNNumber = Number(n[2])
    let num = "";
    flag = false;


    for(i = 1; i <= 9; i++){
        if(flag){break};
        for (j = 9; j > i; j--){
            if(flag){break};
            for (k = 0; k <= 9; k++){
                if(flag){break};
                for(l = 9; l > k; l--){

                    let sum = i + j + k + l;
                    let multiplication = i*j*k*l;

                    if(sum === multiplication && lastNNumber === 5){
                        num = "" + i + j + k + l;
                        console.log(num);
                        flag = true;
                        break;
                    } else if (Math.trunc(multiplication / sum) === 3 && nAsNumber % 3 === 0){
                        num = "" + l + k + j + i
                        console.log(num);
                        flag = true;
                        break;
                    }

                    


                }
            }
        }
    }
    if(flag === false){
        console.log("Nothing found");
    }
}




// sumAndProduct(["123"])
sumAndProduct(["145"])
// sumAndProduct(["214"])