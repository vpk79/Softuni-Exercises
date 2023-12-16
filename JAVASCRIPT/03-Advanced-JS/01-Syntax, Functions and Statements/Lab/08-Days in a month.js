function solve(month, year){
    let day = 0;
   
   let newDate = new Date()

   newDate.setFullYear(year);
   newDate.setMonth(month);
   newDate.setDate(day)
   
 console.log(newDate.getDate());
}

solve(1, 2012)
solve(2, 2021)