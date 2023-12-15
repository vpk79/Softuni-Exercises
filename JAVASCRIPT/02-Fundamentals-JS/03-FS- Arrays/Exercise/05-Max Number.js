function maxNumber(arr) {
    let newArr = [];
    

    for (let i = 0; i < arr.length; i++) {
        let buff = 0;
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] <= arr[j]) {
                buff = 0;
                break;
            } else {
                buff = arr[i];
            }
           
        }
        if (buff !== 0) {
            newArr.push(buff)
        }

    }



    newArr.push(arr[arr.length - 1]);
    console.log(newArr.join(" "));

}


// maxNumber([1, 4, 3, 2])
// maxNumber([41, 41, 34, 20])
maxNumber([0,0,0])
