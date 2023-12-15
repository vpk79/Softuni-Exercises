function equalSums(arr){

    let flag = false;
    
    let i = 0;
    for(i = 0; i < arr.length; i++){
        let sumLeft = 0;
        let sumRight = 0;

        for(let j = 0; j < i; j++){
            let num = arr[j];
            if(num == undefined){
                num = 0;
            }
            sumLeft += num; 
        }

        for(let k = i+1; k < arr.length; k++){
            let num2 = arr[k];
            if(num2 == undefined){
                num2 = 0;
            }
            sumRight += num2;
        }

        if(sumLeft === sumRight){
            flag = true;
            break;
        }
    }

    if(flag){
    console.log(i);
    } else {console.log("no");}
}


equalSums([1, 2, 3, 3])
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])
equalSums([1])
equalSums([1, 2, 3])