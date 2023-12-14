function profit(input){
    let oneLev = Number(input[0]);
    let twoLeva = Number(input[1]);
    let fiveLeva = Number(input[2]);
    let finalSum = Number(input[3]);


    for(let i = 0; i <= oneLev; i++){
        for( let j = 0; j <= twoLeva; j++){
            for(k = 0; k <= fiveLeva; k++){
                if(i*1 + j*2 + k*5 === finalSum){
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${finalSum} lv.`);
                    break;
                }
            }
        }
    }


}


// profit(["3","2","3","10"])
profit(["5", "3","1","7"])