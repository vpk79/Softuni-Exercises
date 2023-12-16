function solve(input){
    input.sort((a,b) => a.localeCompare(b));

    for(let index in input){
        console.log(`${Number(index) + 1}.${input[index]}`);
    }
}




solve(["John",
    "Bob",
    "Christina",
    "Ema"])