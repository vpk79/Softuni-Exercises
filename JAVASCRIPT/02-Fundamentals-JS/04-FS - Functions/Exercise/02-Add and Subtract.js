function addAndSubtract(num1, num2, num3){

    let result = sum(num1, num2);
    let result2 = subtract(result, num3);
    console.log(result2);

    function subtract(a, b){
      return  a - b;
    }

    function sum(a, b){
        return a + b;
    }
}


addAndSubtract(23, 6, 10)
addAndSubtract(1, 17, 30)
addAndSubtract(42, 58, 100)