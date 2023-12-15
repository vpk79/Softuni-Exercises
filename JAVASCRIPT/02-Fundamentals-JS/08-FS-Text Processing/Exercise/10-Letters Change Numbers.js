function solve(input){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");

    let arr = input.split(" ").join("").split("");

    let newArr = []
    let numbers = "";

    for(let char of arr){
        if(!isNaN(char)){
            numbers += "" + char 
            continue;
        }
        if (numbers.length > 0) {
            numbers= Number(numbers);
            newArr.push(numbers);
            numbers = "";
        }
        newArr.push(char);
    }

    let sum = 0;
    let position;
    for(let i = 0; i < newArr.length; i++){
        let char = newArr[i];
        let nextChar = newArr[i+1];

        if(isNaN(char) && !isNaN(nextChar)){
            position = alphabet.indexOf(char.toLowerCase()) + 1;
            if(char.toUpperCase() === char){
                sum += nextChar / position;
            } else{
                sum += nextChar * position;
            }
        }

        if(!isNaN(char) && isNaN(nextChar)){
            position = alphabet.indexOf(nextChar.toLowerCase()) + 1;
            if(nextChar.toUpperCase() === nextChar){
                sum = sum - position;
            } else{
                sum = sum + position;
            }
        }
    }
    console.log(sum.toFixed(2));
}



solve('A12b s17G')
solve('P34562Z q2576f   H456z')


