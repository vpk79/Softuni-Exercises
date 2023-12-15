function censored(text, word){

    let wordLength = word.length;
    let censoredSymbol = "*".repeat(wordLength);
    

    while(text.includes(word)){
        text = text.replace(word, censoredSymbol)
    }

    console.log(text);

}



censored('A small sentence with some words',
    'small'
)

censored('Find the hidden word', 'hidden')