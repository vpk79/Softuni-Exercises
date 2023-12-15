function factorialDivision(num1, num2){
    let sum = num1;
    let sum2 = num2;

    for(let i = num1 - 1; i > 0; i--){
        sum *= i;
    }

    for(let i = num2 - 1; i > 0; i--){
        sum2 *= i;
    }

    let total = sum / sum2;

    console.log(total.toFixed(2));
}




factorialDivision(5, 2)
factorialDivision(6, 2)