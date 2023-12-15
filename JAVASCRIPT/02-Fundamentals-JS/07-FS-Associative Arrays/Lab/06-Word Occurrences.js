function solve(input){

    let wordList = new Map();

    for(let word of input){

        if(!wordList.has(word)){
            wordList.set(word, 1)
        } else{
            wordList.set(word, wordList.get(word) + 1)
        }
    }

    let sortedWordList = new Map([...wordList].sort((a,b) => b[1] - a[1]));

    for(let [key, value] of sortedWordList){
        console.log(`${key} -> ${value} times`);
    }

}



solve(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"])