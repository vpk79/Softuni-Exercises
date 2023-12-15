

function magicMatrices(arr){
    let arr1 = arr.flat()
    let squareLength = arr[0].length;
    
   
    let buff1 = []
    let buff2 = []
    
    let flag = false;
    let num1 = 0;
    let num2 = 0;

    for(let i = 0; i < arr1.length; i+= squareLength ){
        num1 = 0;
        
        for(let j = i; j < squareLength +i; j++){
            num1 += arr1[j]
            
        }

        buff1.push(num1);
        
        
    }

    for(let i = 0; i < squareLength; i++){
        num2 = 0;
        for(let k = i; k < arr1.length +i; k += squareLength){
            num2 += arr1[k];
            
        }
        buff2.push(num2);
    }
   
    
    for(let i = 0; i < buff1.length; i++){
        let max = Math.max(...buff1)
        if (max !== buff1[i]){
            flag = false;
            break;
        } else {
            flag = true;
        }
    }

    for(let i = 0; i < buff2.length; i++){
        let max = Math.max(...buff2)
        if (max !== buff2[i]){
            flag = false;
            break;
        } else {
            flag = true;
        }
    }
   

    console.log(flag);
   
}


magicMatrices(
    [[4, 5, 6],
     [6, 5, 4],
     [5, 5, 5]])


// magicMatrices([
//     [11, 32, 45],
//     [21, 0, 1],
//     [21, 1, 1]]
//     )

// magicMatrices([[1, 0, 0],
//     [0, 0, 1],
//     [0, 1, 0]]
//     )