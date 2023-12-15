function solve(input){
    let string = input.shift();

    for(let token of input){
        if(token === 'Finish') break;

        if(token.includes('Replace')) string = replace(token);
        if(token.includes('Make')) string = make(token);
        if(token.includes('Check')) string = check(token);
        if(token.includes('Sum')) string = sum(token);
        if(token.includes('Cut')) string = cut(token);

    }

    function replace(token){
        let[command, oldWrd, newWrd] = token.split(' ');
        let pattern = new RegExp(oldWrd, 'g' );
        string = string.replace(pattern, newWrd);
        console.log(string);
        return string;
    }

    function make(token){
        let [command, type] = token.split(' ');
        if(type === 'Upper'){
            string = string.toUpperCase();
        } else {
            string = string.toLowerCase();
        }
        console.log(string);
        return string;
    }

    function check(token){
        let[command, word] = token.split(' ');
        if(string.includes(word)){
            console.log(`Message contains ${word}`);
        } else {
            console.log(`Message doesn't contain ${word}`);
        }
        return string;
    }

    function sum(token){
        let[command, startIdx, endIdx] = token.split(' ');
        startIdx = Number(startIdx);
        endIdx = Number(endIdx);
        if(string[startIdx] && string[endIdx]){
            let part = string.slice(startIdx, endIdx + 1);
            let sum = 0;
            for(let char of part){
                sum += char.charCodeAt(0);
            }
            console.log(sum);
           
        } else{
            console.log('Invalid indices!');
        }
        return string;
    }

    function cut(token){
        let[command, startIdx, endIdx] = token.split(' ');
        startIdx = Number(startIdx);
        endIdx = Number(endIdx);
        if(string[startIdx] && string[endIdx]){
            string = string.slice(0,startIdx) + string.slice(endIdx +1);
            console.log(string);
        } else {
            console.log('Invalid indices!');
        }
        return string;
    }
   
}



// solve((["ILikeSoftUni",
//     "Replace I We",
//     "Make Upper",
//     "Check SoftUni",
//     "Sum 1 4",
//     "Cut 1 4",
//     "Finish"])
// )

solve(["HappyNameDay",
    "Replace p r",
    "Make Lower",
    "Cut 2 23",
    "Sum -2 2",
    "Finish"])
