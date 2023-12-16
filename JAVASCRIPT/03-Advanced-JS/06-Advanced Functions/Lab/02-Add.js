function solve(num){

    function summing(sum){
        return sum + num;
    }
    return summing;
}

let add5 = solve(5);
console.log(add5(2));
console.log(add5(3));

let add7 = solve(7);
console.log(add7(2));
console.log(add7(3));