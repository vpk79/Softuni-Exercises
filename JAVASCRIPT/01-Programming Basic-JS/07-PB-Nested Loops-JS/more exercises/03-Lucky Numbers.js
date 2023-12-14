function luckyNumbers(input) {
    let num = Number(input[0]);
    let luckyNum = "";


    for (let i = 1; i <= 9; i++) {

        for (let j = 1; j <= 9; j++) {
            


                for (k = 1; k <= 9; k++) {
                   
                    for (l = 1; l <= 9; l++) {

                        

                            if (i + j === k + l) {

                                if (num % (i + j) == 0) {

                                luckyNum += `${i}${j}${k}${l} `

                                }
                            }

                    }

                }
           

        }


    }
    console.log(luckyNum);
    

}




luckyNumbers(["3"])