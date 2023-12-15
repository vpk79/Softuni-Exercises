function numberModification(num){
    let numAsString = num.toString();
    let isHigher = false;
    
    let addNumber = "";

    while(isHigher !== true){

        let checkDigitSum = numDigitSum(numAsString);

        if(checkDigitSum / numAsString.length < 5){

            addNumber =  addNumberNine(numAsString);
            numAsString = addNumber;

        }  else{

            isHigher = true;
        }

    }

    console.log(numAsString);

    function numDigitSum(num){
        let buffer = 0;
        for(let i = 0; i < num.length; i++){
            buffer += Number(num[i]);
        }
        return buffer;
    }

    function addNumberNine(num){
        let addNine = num + '9';
        return addNine;
    }
}


numberModification(101)
numberModification(5835)