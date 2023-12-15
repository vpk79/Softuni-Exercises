function solve(text){

    let textArr = text.split(" ");

    let result;
   

    for(let word of textArr){
       
        if(word.startsWith('#') && word.length > 1){
            let correct = true;
            result = word.slice(1)

            for(let char of result){
                let el = char.toLowerCase().charCodeAt(0);
                if(el < 97 || el > 122){
                    correct = false;
                    break;
                }
            }
            if (correct) console.log(result);
        }
    }
}




solve('Nowadays everyone uses ## to tag a #special word in #socialMedia')
solve('The symbol # is known #variously in English - speaking #regions as the #number sign')