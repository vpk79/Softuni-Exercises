function solve(word, text){
    let textArr = text.split(" ");

    let notFound = true;

    for(let el of textArr){
        if(word.toLowerCase() === el.toLowerCase()){
            console.log(word);
            notFound = false;
            break;
        }
    }

    if(notFound){
        console.log(`${word} not found!`);
    }

}



solve('javascript', 'JavaScript is the best programming language')
solve('python','JavaScript is the best programming language')