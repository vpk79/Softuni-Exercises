function equalNeighbours(input){
    let counter = 0;

    for(let i = 0; i < input.length; i++){
        let array = input[i]

        for(let j = 0; j < array.length; j++){
            let element = array[j];

            for(let k = i; k < input.length; k++){
                let array2 = input[k];

                if(array2.includes(element)){
                    for(let l = j; l < array2.length; l++){
                        let element2 = array2[l]
                        if(element === element2 && l === j+1 && i === k || element === element2 && j === l && k === i + 1 ){
                            counter++;
                        }
                    }

                }
               
            }
        }
    }
    
    console.log(counter);

}




equalNeighbours([
['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])


// equalNeighbours([
// ['2','2','5','7','4'],
// ['4','0','5','3','4'],
// ['2','5','5','4','2']])

// equalNeighbours([
// ['test', 'yo', 'yo','ho'],
// ['well', 'done', 'no','6'],
// ['not', 'done', 'yet','5']])