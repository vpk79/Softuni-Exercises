function printNthElement(input){
    let step = Number(input.pop())
    let buff = [];

    for(let i = 0; i < input.length; i += step){
        buff.push(input[i]);
    }

    console.log(buff.join(" "));
}

printNthElement(['5', '20', '31', '4', '20', '2'])
printNthElement(['dsa', 'asd', 'test', 'test', '2'])
printNthElement(['1', '2', '3', '4', '5', '6'] )