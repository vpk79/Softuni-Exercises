function maxSequence(arr){

    let counter = 0;
    let mostCounter = 0;
    let num;
    let newArr = []


    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i+1]){
            counter++;
        } else {
            counter = 0;
        }

        if(counter > mostCounter){
            mostCounter = counter;
            num = arr[i];
        }
    }

    for(let i = 0; i <= mostCounter; i++){
        newArr.push(num)
    }

    console.log(newArr.join(" "));

}


maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequence([1, 1, 1, 2, 3, 1, 3, 3])
maxSequence([4, 4, 4, 4])
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3])