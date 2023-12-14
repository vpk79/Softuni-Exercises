function vowelsSum(input){
    let text = input[0];
    let value = 0;
    for(let i = 0; i < text.length; i++){
        let chars = text[i];

        switch(chars){
            case "a": value += 1; break;
            case "e": value += 2; break;
            case "i": value += 3; break;
            case "o": value += 4; break;
            case "u": value += 5; break;
        }
    }
    console.log(value);
}



vowelsSum(["bamboo"]);