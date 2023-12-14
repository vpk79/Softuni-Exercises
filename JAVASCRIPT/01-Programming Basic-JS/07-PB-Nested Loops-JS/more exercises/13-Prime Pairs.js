function primePairs(input){
    let firstCouple = Number(input[0]);
    let secondCouple = Number(input[1]);
    let firstDifference = Number(input[2]);
    let secondDifference = Number(input[3]);


    let firstCoupleEnd = firstCouple + firstDifference;
    let secondCoupleEnd = secondCouple + secondDifference;

    for(let i = firstCouple; i <= firstCoupleEnd; i++){
            counter = 0;
            for(let pr1 = 1; pr1 <= i; pr1++){
                if(i % pr1 == 0){
                    
                    counter++;
                }
            }
    
            if(counter == 2){
                for(let j = secondCouple; j <= secondCoupleEnd; j++){
                    counter = 0;
                    for(let pr2 = 1; pr2 <= j; pr2++){

                         if(j % pr2 == 0){
                    
                             counter++;
                        }

                    }

                    if(counter == 2){
                        console.log(`${i}${j}`);
                    }

                }
                
            }
        
    
       
    }
}






// primePairs(["10","20","5","5"])
primePairs(["10","30","9","6"])