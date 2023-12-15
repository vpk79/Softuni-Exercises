function condeseArraytoNumber(arr){

   while(arr.length > 1){

    let  newArr = []

    for(let i = 0; i < arr.length - 1; i++){
       
        let sum = arr[i] + arr[i+1];
        newArr.push(sum);
    }

    arr = newArr

   }
   console.log(arr[0]); 
}

condeseArraytoNumber([2,10,3])