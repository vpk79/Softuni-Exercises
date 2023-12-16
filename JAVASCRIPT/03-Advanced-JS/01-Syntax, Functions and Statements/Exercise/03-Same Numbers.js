function solve(input){

    let string = input.toString();
    
    if(string[0].repeat(string.length) !== string){
        console.log(false);
    } else{
        console.log(true);
    }
    let sum = string.split("").map(Number).reduce((a,x) => a + x, 0)
    console.log(sum);
}



solve(2222222)
solve(1234)