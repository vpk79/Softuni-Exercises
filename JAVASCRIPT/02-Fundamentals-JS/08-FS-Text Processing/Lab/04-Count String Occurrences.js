function solve(text, word){

    let textArr = text.split(" ");

    let count = 0;

    for(let el of textArr){
        el === word ? count++ : void(0);
    }
    console.log(count);

}



solve('This is a word and it also is a sentence',
    'is'
)