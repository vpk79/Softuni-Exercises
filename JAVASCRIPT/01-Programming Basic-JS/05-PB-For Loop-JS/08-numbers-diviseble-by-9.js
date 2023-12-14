function numbersBy9(input){
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let sum = 0;
    let buffer = "";

    for(i = num1; i <= num2; i++){
        if (i % 9 == 0){
            sum += i;
            buffer += i + " \n";
        }


    }
    console.log(`The sum: ${sum}`);
    console.log(buffer);
}






numbersBy9(["100", "200"])