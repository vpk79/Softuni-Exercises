function pointsValidation(input){
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];
    let isInteger;

    let firstCheck = pointsCalculation(x1, y1, 0, 0);
    isInteger = checkIsInteger(firstCheck);
    printResult(isInteger, x1, y1, 0, 0)

    let secondCheck = pointsCalculation(x2, y2, 0, 0);
    isInteger = checkIsInteger(secondCheck);
    printResult(isInteger, x2, y2, 0, 0)

    let thirdCheck = pointsCalculation(x1, y1, x2, y2 );
    isInteger = checkIsInteger(thirdCheck);
    printResult(isInteger, x1, y1, x2, y2)




    function printResult(isInteger, x1, y1, x2, y2){

        if(isInteger){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }


    function checkIsInteger(num){

        if(num % 1 > 0){
            return false;

        } else {
            return true;
        }
        
    }


    function pointsCalculation(x1, y1, x2, y2){

        let result = Math.sqrt((x2-x1)**2 + (y2-y1)**2);

        return result;
    }
    
}



pointsValidation([3, 0, 0, 4])
// pointsValidation([2, 1, 1, 1])