function signCheck(numOne, numTwo, numThree){
    let buffer = [];
    buffer.push(numOne, numTwo, numThree);  // creates array of numbers

    let counter = 0;

    for(let nums of buffer){    // check for negative numbers 
        if(nums < 0){
            counter++;
        }
    }

    if(counter % 2 == 0){       // if negative numbers are even then result is positive
        console.log("Positive");
    } else {                       // if negative numbers are odd then result is negative
        console.log("Negative");
    }
}



signCheck(5, 12,-15)
signCheck(-6, -12, 14)
signCheck(-1,-2,-3)
signCheck(-5, 1, 1)