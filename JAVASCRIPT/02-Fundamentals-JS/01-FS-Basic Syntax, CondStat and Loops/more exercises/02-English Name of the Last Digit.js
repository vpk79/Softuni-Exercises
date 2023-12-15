function englishName(num){
    let numAsString = num.toString()
    let lastChar = numAsString[numAsString.length-1]
    let word = "";
    
    if(lastChar == "0"){
        word = "zero"
    } else if(lastChar == "1"){
        word = "one"
    }else if(lastChar == "2"){
        word = "two"
    }else if(lastChar == "3"){
        word = "three"
    }else if(lastChar == "4"){
        word = "four"
    }else if(lastChar == "5"){
        word = "five"
    }else if(lastChar == "6"){
        word = "six"
    }else if(lastChar == "7"){
        word = "seven"
    }else if(lastChar == "8"){
        word = "eight"
    }else if(lastChar == "9"){
        word = "nine"
    }

    console.log(word);
}


englishName(1643)