function arrayRotation(arr, rotation) {
    

    while (rotation > 0) {
       let newArr = [];
        let firstElement = arr[0];

        for (let i = 1; i < arr.length; i++) {
            newArr.push(arr[i]);
        }
        
        newArr.push(firstElement);
        arr = newArr;
        rotation--;
    }

    console.log(arr.join(" "));
}



arrayRotation([51, 47, 32, 61, 21], 2)