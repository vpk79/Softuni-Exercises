function solve(year, month, day){
day -= 1;
month -= 1;
let newDate = new Date(year, month, day)
console.log(`${newDate.getFullYear()}-${newDate.getMonth() +1}-${newDate.getDate()}`);

}

solve(2016, 9, 30)
solve(2015, 5, 10)
solve(2015, 0, 1)
solve(2016, 10, 1)