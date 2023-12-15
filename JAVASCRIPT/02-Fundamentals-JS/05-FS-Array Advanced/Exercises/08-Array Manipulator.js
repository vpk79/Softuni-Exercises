function arrayManipulations(arr1, arr2) {

    let index = 0;
    let sentence = arr2[index];
    index++;


    while (sentence !== 'print') {

        if (sentence.includes('addMany')) {
            arr1 = addMany(sentence);
        } else if (sentence.includes('add')) {
            arr1 = add(sentence);
        } else if (sentence.includes('contains')) {
            contains(sentence);
        } else if (sentence.includes('remove')) {
            arr1 = remove(sentence);
        } else if (sentence.includes('shift')) {
            arr1 = shift(sentence);
        } else if (sentence.includes('sumPairs')) {
            arr1 = sumPairs();
        }

        sentence = arr2[index];
        index++;
    }



    function add(string) {
        let newArr = string.split(" ");
        let [command, index, number] = newArr;

        arr1.splice(index, 0, Number(number));

        return arr1;
    }

    function addMany(string) {
        let newArr = string.split(" ");
        let [command, index] = newArr;

        for (let i = newArr.length - 1; i >= 2; i--) {
            arr1.splice(index, 0, Number(newArr[i]));
        }

        return arr1;
    }


    function contains(string) {
        let newArr = string.split(" ");
        let [command, number] = newArr;

        let num = arr1.indexOf(Number(number))

        console.log(num);

        return;
    }

    function remove(string) {
        let newArr = string.split(" ");
        let [command, index] = newArr;

        arr1.splice(Number(index), 1);

        return arr1;

    }


    function shift(string) {
        let newArr = string.split(" ");
        let [command, positions] = newArr;

        for (let i = 0; i < Number(positions); i++) {
            let num = arr1.shift()
            arr1.push(num);
        }

        return arr1;

    }

    function sumPairs() {
        
        let result = [];

        for (let i = 0; i < arr1.length; i += 2) {

            let currentNum = arr1[i];
            let nextNum = arr1[i + 1];
            if (nextNum !== undefined) {
                result.push(currentNum + nextNum);
            } else {
                result.push(currentNum);
            }
        }

        return result;
    }

    if (sentence === 'print') {

        return (`[ ${arr1.join(", ")} ]`)
    }

}





// console.log(arrayManipulations([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']))
// console.log(arrayManipulations([1, 2, 3, 4, 5],['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3','shift 1', 'print']));
// console.log(arrayManipulations([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'shift 5', 'print']))

console.log(arrayManipulations([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3','sumPairs', 'print']))
