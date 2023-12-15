function oddAndEvenSum(number){

    let numAsString = number.toString()
    let odd = 0;
    let even = 0;
    let num = 0;

    for(let i = 0; i < numAsString.length; i++){
        num = Number(numAsString[i]);

        if(num % 2 == 0){
            even += num;
        } else {
            odd += num;
        }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}


oddAndEvenSum(1000435)