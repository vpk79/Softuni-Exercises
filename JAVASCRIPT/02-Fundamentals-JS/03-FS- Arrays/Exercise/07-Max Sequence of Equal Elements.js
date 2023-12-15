function maxSequence(arr) {


    let newArr = []
    let newArr2 = []
   

    for (let i = 0; i < arr.length ; i++) {

        let num = arr[i];
        let num2 = arr[i + 1];
        let num3 = arr[i-1]

        if ((num === num2 && num === num3) || (num === num2) || (num === num3 && num !== num2)) {

            if(num !== num3){
                newArr = []
            }

            newArr.push(num);

            if (newArr.length > newArr2.length) {
                newArr2 = newArr;
            } 

        } else {
            newArr = [];
        }

    }

    console.log(newArr2.join(" "));

}


maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequence([1, 1, 1, 2, 3, 1, 3, 3])
maxSequence([4, 4, 4, 4])
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3])