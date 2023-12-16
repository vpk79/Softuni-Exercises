function getFibonator(){
    let nums = [0,1];
    
    return () => {
        let num = nums[0] + nums[1];
        nums[1] = nums[0];
        nums[0] = num;
        return num;
    }
}


let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13