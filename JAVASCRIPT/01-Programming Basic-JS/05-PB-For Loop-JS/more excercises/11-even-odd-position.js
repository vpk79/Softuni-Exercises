function evenOrOdd(input){
    let numbers = Number(input[0]);
    let oddSum = 0;
    let oddMin = 1000000000.0 ;
    let oddMax = -1000000000.0 ;

    let evenSum = 0;
    let evenMin = 1000000000.0 ;
    let evenMax = -1000000000.0 ;


    for(let i = 1; i < numbers + 1; i++){
        let num = Number(input[i]);

        if(i % 2 == 0){
            evenSum += num;
             if(num > evenMax){
                evenMax = num;
             }
             if(num < evenMin) {
                evenMin = num;
             }
        } else {
            oddSum += num;
             if(num > oddMax){
                oddMax = num;
             }
            if(num < oddMin) {
                oddMin = num;
             }

        }
    }

    if(oddMin == 1000000000.0){
        oddMin = "No";
    } 
    if (oddMax == -1000000000.0){
        oddMax = "No";
    }
    if (evenMin == 1000000000.0){
        evenMin = "No";
    }
    if (evenMax == -1000000000.0){
        evenMax = "No";
    }


    console.log(`OddSum=${oddSum.toFixed(2)},`);

    if (oddMin != "No"){
        console.log(`OddMin=${oddMin.toFixed(2)},`);
    } else {
        console.log(`OddMin=${oddMin.toFixed(2)},`);
    }
    
    if (oddMax != "No"){
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    } else {
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    }
    
    console.log(`EvenSum=${evenSum.toFixed(2)},`);

    if(evenMin != "No"){
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
    } else { 
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
    }

    if (evenMax != "No"){
       console.log(`EvenMax=${evenMax.toFixed(2)}`);
    } else {
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }
   
    


}




// evenOrOdd(["6","2","3","5","4","2","1"])
evenOrOdd(["0"])
// evenOrOdd(["2","1.5","-2.5"])