function solve(n, k){
    let start = [1];

    for(let i = 1; i < n; i++){
        let min = Math.min(start.length, k);
        let backNums = start.slice(i- min, i).reduce((a,x) => a + x);
        start.push(backNums);
    }
    return(start);
}



solve(6, 3)
solve(8, 2)