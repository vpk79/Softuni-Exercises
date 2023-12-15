function solve(words, text){

let wordsArr = words.split(", ")

let wordLength;

for(let token of wordsArr){
    wordLength = token.length;
    let searchWord = '*'.repeat(wordLength);
    text = text.replace(searchWord, token)
    
}

console.log(text);

}





solve('great',
    'softuni is ***** place for learning new programming languages')
    
solve('great, learning',
    'softuni is ***** place for ******** new programming languages')
    