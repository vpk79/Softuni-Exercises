function solve(input){

    let mapOfWords = new Map();
    let arrayOfWords = input.shift().split(" ");
    
    for(let word of arrayOfWords){
        mapOfWords.set(word, 0)
    }

    for(let word of input){
        if(mapOfWords.has(word)){
            mapOfWords.set(word, mapOfWords.get(word) + 1);
        }
    }

    let sortedMap = new Map([...mapOfWords].sort((a,b) => b[1] - a[1]));

    for(let [key, value] of sortedMap){
        console.log(`${key} - ${value}`);
    }
}




solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
])