function diagonalAttack(arr){
    
    let newArr = [];
    let arrSize = arr[0].split(" ").length;
    for(let i = 0; i < arr.length; i++){
        let string = arr[i].split(" ");
        for(let j = 0; j < string.length; j++){
            newArr.push(Number(string[j]))
        }
    }

    let leftDiagonal = 0;
    for(let i = 0; i < newArr.length; i += arrSize + 1){
        leftDiagonal += newArr[i];
    }

    let rightDiagonal = 0;
    for(let i = arrSize - 1; i <= newArr.length - arrSize; i += arrSize - 1){
        rightDiagonal += newArr[i];
    }

    if(rightDiagonal === leftDiagonal){
        let skipRight = 0;
        let skipLeft = arrSize - 1;
        for(let i = 0; i < newArr.length; i++){
           
            if(i == skipRight){
                if(skipRight == skipLeft){
                    skipLeft += arrSize - 1;
                }
                skipRight += arrSize +1;
                continue;
            } else if(i == skipLeft){
                skipLeft += arrSize - 1;
                continue;
            }
            newArr[i] = rightDiagonal;
        }
        
    } 

    for(let i = 0; i < newArr.length; i += arrSize){
        let buff = []
        for(let j = i; j < arrSize + i; j++ ){
            buff.push(newArr[j]);
        }

        console.log(buff.join(" "));

    }

}



// diagonalAttack(
// ['5 3 12 3 1',
// '11 4 23 2 5',
// '101 12 3 21 10',
// '1 4 5 2 2',
// '5 22 33 11 1'])

diagonalAttack(['1 1 1',
'1 1 1',
'1 1 0'])