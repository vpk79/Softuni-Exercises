function minNumber(input){
    let index = 0;
    let text = input[index];
    let maximum = Number.MAX_SAFE_INTEGER;

    while(text !== "Stop"){
        let num = Number(input[index]);
        if(num < maximum){
            maximum = num;
        }


        index++;
        text = input[index];
    }

    console.log(maximum);
}

minNumber(["100",
"99",
"80",
"70",
"Stop"])
