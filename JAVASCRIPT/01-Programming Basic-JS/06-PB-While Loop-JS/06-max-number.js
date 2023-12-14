function maxNumber(input){
    let index = 0;
    let text = input[index];
    let maximum = Number.MIN_SAFE_INTEGER;

    while(text !== "Stop"){
        let num = Number(input[index]);
        if(num > maximum){
            maximum = num;
        }


        index++;
        text = input[index];
    }

    console.log(maximum);
}




maxNumber(["45",
"-20",
"7",
"99",
"Stop"])

