function simpleCalculator(numOne, numTwo, operator){

    // function simpleCalculator(num1, num2, operation) {
    //     let words = ["multiply", "add", "divide", "subtract"];
    //     let signs = ["*", "+", "/", "-"];
    //     let calculate = num1 + signs[words.indexOf(operation)] + num2;
    //     return eval(calculate);
    // }

    // while(operator === "add"){
    //     console.log(numOne + numTwo);
    //     operator = false;
    // }

    // while(operator === "subtract"){
    //     console.log(numOne - numTwo);
    //     operator = false;
    // }

    // while(operator === "multiply"){
    //     console.log(numOne * numTwo);
    //     operator = false;
    // }

    // while(operator === "divide"){
    //     console.log(numOne / numTwo);
    //     operator = false;
    // }
    

    
    let sum;

    switch(operator){
        case 'add': sum = (a, b) => a + b; break;
        case 'subtract': sum = (a, b) => a - b; break;
        case 'multiply': sum = (a, b) => a * b; break;
        case 'divide': sum = (a, b) => a / b; break

    }

        console.log(sum(numOne, numTwo));
}


simpleCalculator(5, 5, 'multiply')
simpleCalculator(12, 19,'add')
    