function arrayManipulations(input){
    let mainArray = input[0].split(" ").map(x => Number(x));

    for(let i = 1; i < input.length; i++){
        let [command, firstNumber, secondNumber] = input[i].split(" ");
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);

        switch(command){
            case 'Add': mainArray = add(firstNumber) ; break;
            case 'Remove': mainArray = remove(firstNumber); break;
            case 'RemoveAt': mainArray = removeAt(firstNumber); break;
            case 'Insert': mainArray = insert(firstNumber, secondNumber); break;
        }
    }

    return(mainArray.join(" "));



    function add(num){
        mainArray.push(num);
        return mainArray;
    }

    function remove(num){
        mainArray = mainArray.filter(x => x !== num);
        return mainArray;
    }
    
    function removeAt(num){
        mainArray.splice(num, 1);
        return mainArray;
    }

    function insert(num, idx){
        mainArray.splice(idx, 0, num);
        return mainArray;
    }
}



// console.log(arrayManipulations([
// '4 19 2 53 6 43',
// 'Add 3',
// 'Remove 2',
// 'RemoveAt 1',
// 'Insert 8 3']))

console.log(arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']
));