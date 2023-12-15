function negativeOrPostiveNumbers(input){
    let result = [];

    for(let el of input){
        if(Number(el) < 0){
            result.unshift(el)
        } else {
            result.push(el)
        }
    }

    return(result.join('\n'))
}


console.log(negativeOrPostiveNumbers(['7', '-2', '8', '9']));
console.log(negativeOrPostiveNumbers(['3', '-2', '0', '-1']));