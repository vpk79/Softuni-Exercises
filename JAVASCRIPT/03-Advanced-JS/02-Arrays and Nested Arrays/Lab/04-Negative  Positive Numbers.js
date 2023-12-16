function solve(input){
    let newArr = [];

    for(let el of input){
        el < 0 ? newArr.unshift(el) : newArr.push(el)
    }

    console.log(newArr.join("\n"));
}



solve([7, -2, 8, 9])