function numberOperation(input){
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operation = input[2];
    let evenOrOdd = "";

    let result = 0;

    switch(operation){
        case "+":
            result = num1 + num2;
            if(result % 2 == 0){
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            console.log(`${num1} ${operation} ${num2} = ${result} - ${evenOrOdd}`);
            break;

        case "-":
            result = num1 - num2;
            if(result % 2 == 0){
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            console.log(`${num1} ${operation} ${num2} = ${result} - ${evenOrOdd}`);
            break;
        
        case "*":
            result = num1 * num2;
            if(result % 2 == 0){
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            console.log(`${num1} ${operation} ${num2} = ${result} - ${evenOrOdd}`);
            break;

        case "/":
            if(num2 == "0"){
                console.log(`Cannot divide ${num1} by zero`);
            } else {
                result = num1 / num2;
                console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
            }
            break;
        
        case "%":
            if(num2 == "0"){
                console.log(`Cannot divide ${num1} by zero`);
            } else {
                result = num1 % num2;
                console.log(`${num1} % ${num2} = ${result}`);
            }
            break;




    }


}



numberOperation(["112", "0", "/"])