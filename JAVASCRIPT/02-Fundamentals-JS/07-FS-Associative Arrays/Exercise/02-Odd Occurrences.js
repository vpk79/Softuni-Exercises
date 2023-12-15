function solve(input){

    let mapOfWords = new Map();

    let arrayOfWords = input.toLowerCase().split(" ");

    for(let word of arrayOfWords){
        if(!mapOfWords.has(word)){
            mapOfWords.set(word, 1);
        } else{
            mapOfWords.set(word, mapOfWords.get(word) + 1 );
        }
    }

    let bufferArr = [];

    for(let [word, count] of mapOfWords){
        if(count % 2 !== 0){
            bufferArr.push(word);
        }
    }

    console.log(bufferArr.join(" "));
}


solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')