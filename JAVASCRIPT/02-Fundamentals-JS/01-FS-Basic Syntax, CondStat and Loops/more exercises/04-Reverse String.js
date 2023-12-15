function reversString(word){

    let newWord = ""
    for(let i = word.length-1; i >= 0; i--){
        newWord += word[i];
    }

    console.log(newWord);
}



reversString("Hello")