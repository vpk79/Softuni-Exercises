function solve(text){
    // let newText = "";

    // for(let i = 0; i < text.length; i++){
    //     let char = text[i];
    //     let char2 = text[i+1];
    //     if(char !== char2){
    //         newText += char;
    //     }
    // }
    // console.log(newText);

    return arr = text.split("").filter((item, index, array) => array[index] !== array[index+1]).join("");
}



console.log(solve('aaaaabbbbbcdddeeeedssaa'))
console.log(solve('qqqwerqwecccwd'))