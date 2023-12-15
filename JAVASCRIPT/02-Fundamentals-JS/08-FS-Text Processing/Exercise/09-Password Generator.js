function solve(arr){
    let stringOne = arr[0];
    let stringTwo = arr[1];
    let specialWord = arr[2].toUpperCase();

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    let specialWordArr = specialWord.split("");
    let stringArr = stringOne.concat(stringTwo).split("");

    for(let i = 0; i < stringArr.length; i++){
        let char = stringArr[i];
        if(vowels.includes(char)){
            if(specialWordArr.length < 1){
                specialWordArr = specialWord.split("");
            }
            let newChar = specialWordArr.shift();
            stringArr[i] = newChar;
        }
    }

   let password = stringArr.reverse().join("");

    console.log(`Your generated password is ${password}`);

}




solve([
    'ilovepizza',
    'ihatevegetables',
    'orange'
])

solve([
    'easymoneyeazylife',
    'atleasttencharacters',
    'absolute'
])