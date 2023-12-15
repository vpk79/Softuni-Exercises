function numbers(input){

    let array = input.split(" ").map(x => Number(x));

    let avgArray = array.reduce((a,b) => a + b) / array.length;

    let result = array.filter(x => x > avgArray).sort((a,b) => a - b).reverse();

    if(result.length > 5)result.length = 5;
    if(result.length == 0){
        console.log("No");
    } else {
        console.log(result.join(" "));
    }

    
}




numbers('10 20 30 40 50')
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
numbers('-1 -2 -3 -4 -5 -6')
numbers('1')