function barcode(input){
   
    let firstNumber = input[0];
    
    let secondNumber = input[1];
   
    let firstNumberFirstDigital = Number(firstNumber[0]);
    let firstNumberSecondDigital = Number(firstNumber[1]);
    let firstNumberThirdDigital = Number(firstNumber[2]);
    let firstNumberForthDigital = Number(firstNumber[3]);

    let secondNumberFirstDigital = Number(secondNumber[0]);
    let secondNumberSecondDigital = Number(secondNumber[1]);
    let secondNumberThirdDigital = Number(secondNumber[2]);
    let secondNumberForthDigital = Number(secondNumber[3]);

    buffer = "";


    for(let i = firstNumberFirstDigital; i <= secondNumberFirstDigital; i++){
        if(i % 2 !== 0){
            for(let k = firstNumberSecondDigital; k <= secondNumberSecondDigital; k++){
                if(k % 2 !== 0){
                    for(let l = firstNumberThirdDigital; l <= secondNumberThirdDigital; l++){
                        if(l % 2 !== 0){
                            for(let n = firstNumberForthDigital; n <= secondNumberForthDigital; n++){
                                if(n %2 !==0){

                                    buffer += `${i}${k}${l}${n} `;
                                    
                                }
                            }
                        }
                    }
                }
            }
        }

        

    }
    console.log(buffer);
}







barcode(["2345", "6789"])
