function solve(text){

    let words = [];

    let string = text[0];

    for(let i = 1; i < text.length; i++){
        let char = text[i];

        if(char.toUpperCase() !== char){
            string += char;
        } else {
            words.push(string);
            string = text[i];
        }
    }

    words.push(string);

    console.log(words.join(", "));

}



solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
solve('HoldTheDoor')
solve('ThisIsSoAnnoyingToDo')